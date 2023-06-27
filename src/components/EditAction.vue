<template>
  <n-card class="w-3/4">
    <n-space vertical>
      <div class="flex flex-row justify-between">
        <h1 class="text-base font-medium w-1/5">Type</h1>
        <n-select v-model:value="actionType" :options="taskOptions" />
      </div>
      <div class="flex flex-row justify-between">
        <h1 class="text-base font-medium w-1/5">Action</h1>
        <n-select :options="actionOptions" />
      </div>
      <div class="flex flex-row justify-between">
        <h1 class="text-base font-medium w-1/5">Number</h1>
        <div class="flex flex-row w-full justify-between">
          <n-input-number
            v-model:value="selTask"
            :min="selTaskIndex[0]"
            :max="selTaskIndex.length"
          />
          <div class="flex flex-row">
            <h1 class="text-base font-medium mr-2">Enabled</h1>
            <n-checkbox v-model:checked="enabled" />
          </div>
        </div>
      </div>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { NSpace, NSelect, NInputNumber, NCard, NCheckbox } from "naive-ui";
import { useTasksStore } from "../stores/state";
import { useTasks } from "../utils/hooks";
import { computed, watch, ref, inject, type ComputedRef } from "vue";
import { ITask } from "../types";
import { Task, EnrouteTask, PerformCommand } from "../utils/enums";
import { availableActions } from "../utils/availableActions";

type UnitType = "plane" | "helicopter" | "vehicle" | "ship";
type ActionType = "task" | "enrouteTask" | "commands" | "options";

const { tasks } = useTasks();
const store = useTasksStore();

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

const selTaskIndex = computed(() => tasks.value.map((task) => task.number + 1));
const selTask = inject<number>("selection", 0) as unknown as ComputedRef<number>;
const selTaskData = computed({
  get: () => store.getOneTask(selTask.value - 1) ?? store.getOneTask(0),
  set: (value) => {
    store.setOneTask(value, selTask.value - 1);
  },
});

const actionType = ref<ActionType>(getActionType(selTaskData.value));
const unitType = inject<UnitType>("unitType", "plane")

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
/**
 * @todo add parsing for performTask and enrouteTask
 */
const taskCatagory = inject<string>("taskCatagory", "default");
const actionOptions = computed(() => getActionOptions(unitType, taskCatagory));

const enabled = computed({
  get: () => selTaskData.value.enabled,
  set: (value) => {
    selTaskData.value.enabled = value;
  },
});

// can't be computed for some reason naive ui isn't reactive with it
watch(selTaskData, (val) => {
  actionType.value = getActionType(val);
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
