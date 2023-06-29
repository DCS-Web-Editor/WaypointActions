<template>
  <modal>
    <div class="flex flex-row justify-between">
      <h1 class="text-base font-medium w-1/5">Type</h1>
      <n-select v-model:value="actionType" :options="taskOptions" />
    </div>
    <div class="flex flex-row justify-between">
      <h1 class="text-base font-medium w-1/5">Action</h1>
      <n-select v-model:value="subActionOptions" :options="actionOptions" />
    </div>
    <div class="flex flex-row justify-between">
      <h1 class="text-base font-medium w-1/5">Number</h1>
      <div class="flex flex-row w-full justify-between">
        <n-input-number v-model:value="selTask" :min="selTaskIndex[0]" :max="selTaskIndex.length" />
        <div class="flex flex-row">
          <h1 class="text-base font-medium mr-2">Enabled</h1>
          <n-checkbox v-model:checked="enabled" />
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <n-button @click="conditionModal = true" class="bg-card" tertiary size="small"
        ><span> Condition </span></n-button
      >
      <n-button @click="stopConditionModal = true" class="bg-card" tertiary size="small"
        ><span> Stop Condition </span></n-button
      >
    </div>
  </modal>
</template>

<script setup lang="ts">
import { NSelect, NInputNumber, NCheckbox, NButton } from "naive-ui";
import { useTasksStore } from "../stores/state";
import { useTasks } from "../utils/hooks";
import { computed, inject, type ComputedRef, ref } from "vue";
import { ITask } from "../types";
import { Task, EnrouteTask, PerformCommand, OptionName } from "../utils/enums";
import { availableActions } from "../utils/availableActions";
import { defaultTask } from "../utils/utils";
import { setFormation } from "../utils/setAction";
import { options } from "../utils/actions";
import { watch } from "vue";
import Modal from "./Modal.vue";

type UnitType = "plane" | "helicopter" | "vehicle" | "ship";
type ActionType = "task" | "enrouteTask" | "commands" | "options";

const { tasks } = useTasks();
const store = useTasksStore();

const conditionModal = inject<boolean>("condition", false);
const stopConditionModal = inject<boolean>("stopCondition", false);

function getActionType(task: ITask) {
  if (Object.values(Task).includes(task.params.action.id)) {
    return "task";
  } else if (Object.values(EnrouteTask).includes(task.params.action.id)) {
    return "enrouteTask";
  } else if (Object.values(PerformCommand).includes(task.params.action.id)) {
    return "commands";
  } else if (task.params.action.id === "Option") {
    return "options";
  } else {
    return "task";
  }
}

const selTaskIndex = computed(() => tasks.value.map((task) => task.number));
const selTask = inject<number>("selection", 0) as unknown as ComputedRef<number>;
const selTaskData = computed({
  get: () => store.getOneTask(selTask.value - 1) ?? defaultTask,
  set: (value) => {
    store.setOneTask(value, selTask.value - 1);
  },
});

const actionType = ref<ActionType>(getActionType(selTaskData.value));

watch(
  () => actionType.value,
  (value) => {
    actionType.value = value;
  },
);

watch(
  () => selTaskData.value,
  (value) => {
    actionType.value = getActionType(value);
  },
);

const unitType = inject<UnitType>("unitType", "plane");

function getActionOptions(unitType: UnitType, taskCatagory: string) {
  switch (unitType) {
    case "plane":
      return availableActions.plane[actionType.value][taskCatagory];
    case "helicopter":
      return availableActions.helicopter[actionType.value][taskCatagory];
    case "vehicle":
      return availableActions.vehicle[actionType.value][taskCatagory];
    case "ship":
      return availableActions.ship[actionType.value][taskCatagory];
  }
}

function setActionValue(value: number | string) {
  if (actionType.value === "options" && typeof value === "number") {
    const action = computed(() => selTaskData.value.params.action);
    action.value.id = "Option";
    action.value.params.name = value;
    const selOption = options[value];
    if (selOption.label === "ROE" && selOption.options) {
      if (unitType === "plane" || unitType === "helicopter") {
        action.value.params.value = selOption.options[0][0].value;
      } else if (unitType === "ship" || unitType === "vehicle") {
        action.value.params.value = selOption.options[1][0].value;
      }
    } else if (selOption.label === "Formation" && selOption.options) {
      if (unitType === "helicopter") {
        action.value.params = setFormation(selOption.options[0][0].value[0].value);
      } else if (unitType === "plane") {
        const val = selOption.options[1][0].value[0].value as number;
        const form = setFormation(val);
        action.value.params = form;
      }
    } else if (selOption.options) {
      action.value.params.value = selOption.options[0].value;
    } else if ([21, 22, 23].includes(selOption.value)) {
      action.value.params = {
        name: value,
        noTargetTypes: [
          "Fighters",
          "Multirole fighters",
          "Bombers",
          "Helicopters",
          "UAVs",
          "Infantry",
          "Fortifications",
          "Tanks",
          "IFV",
          "APC",
          "Artillery",
          "Unarmed vehicles",
          "AAA",
          "SR SAM",
          "MR SAM",
          "LR SAM",
          "Aircraft Carriers",
          "Cruisers",
          "Destroyers",
          "Frigates",
          "Corvettes",
          "Light armed ships",
          "Unarmed ships",
          "Submarines",
          "Cruise missiles",
          "Antiship Missiles",
          "AA Missiles",
          "AG Missiles",
          "SA Missiles",
        ],
        targetTypes: [],
        value: "none;",
      };
    }
    if (selOption.data) {
      throw new Error("Not Implemented");
    }
  } else {
    throw new Error("Not Implemented");
  }
}

const taskCatagory = inject<string>("taskCatagory", "default");
const actionOptions = computed(() => getActionOptions(unitType, taskCatagory));
const subActionOptions = computed({
  get: () => {
    if (selTaskData.value.params.action.id !== "Option") {
      return selTaskData.value.params.action.id;
    } else {
      const action =
        Object.values(OptionName).find(
          (option) => option === selTaskData.value.params.action.params.name,
        ) ?? -1;
      return action ?? "No Option";
    }
  },
  set: (value) => {
    if (actionType.value === "options") {
      setActionValue(value);
    } else {
      selTaskData.value.params.action.id = value;
    }
  },
});

const enabled = computed({
  get: () => selTaskData.value.enabled,
  set: (value) => {
    selTaskData.value.enabled = value;
  },
});

const taskOptions = [
  {
    label: "Perform Task",
    value: "task",
  },
  {
    label: "Start Enroute Task",
    value: "enrouteTask",
  },
  {
    label: "Perform Command",
    value: "commands",
  },
  {
    label: "Set Option",
    value: "options",
  },
];
</script>
