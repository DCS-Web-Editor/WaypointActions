<template>
  <modal>
    <n-form-item label="Type" label-placement="left">
      <n-select class="w-full" v-model:value="actionType" :options="taskOptions" />
    </n-form-item>
    <n-form-item label="Action" label-placement="left">
      <n-select v-model:value="subActionOptions" :options="actionOptions" />
    </n-form-item>
    <div class="flex flex-row justify-between">
      <n-form-item label="Number" label-placement="left">
        <n-input-number v-model:value="selTask" :min="selTaskIndex[0]" :max="selTaskIndex.length" />
      </n-form-item>
      <n-form-item label="Enabled" label-placement="left">
        <n-checkbox v-model:checked="enabled" />
      </n-form-item>
    </div>
    <n-form-item label="Name" label-placement="left">
      <n-input type="text" v-model:value="name" placeholder="Name..." />
    </n-form-item>
    <div class="flex flex-row justify-between">
      <n-button @click="conditionModal = true" class="bg-card" tertiary size="small"
        >Condition</n-button
      >
      <n-button @click="stopConditionModal = true" class="bg-card" tertiary size="small"
        >Stop Condition</n-button
      >
    </div>
    <div
      :class="{
        'mt-5 border-t border-white border-solid border-1': [-1, 'NoTask', 'NoAction'].includes(
          subActionOptions,
        ),
      }"
    >
      <div class="mt-5">
        <div v-if="subActionOptions === 0">
          <n-select
            v-model:value="selTaskData.params.action.params.value"
            :options="
              options[subActionOptions]?.options?.[
                unitType === 'plane' || unitType === 'helicopter' ? 0 : 1
              ] ?? []
            "
            placeholder="Select an Action"
          />
        </div>
        <div v-if="[21, 22, 23].includes(subActionOptions)">
          <n-tree-select
            :options="options[subActionOptions]?.options ?? []"
            v-model:value="selTaskData.params.action.params.targetTypes"
            @update:value="handleTargetTypes"
            multiple
            cascade
            checkable
            check-strategy="parent"
          />
        </div>
        <div v-if="subActionOptions === 5">
          <n-cascader
            class="w-full"
            :options="formOptions"
            check-strategy="child"
            :show-path="false"
            @update-value="setFormationValue"
            v-model:value="formValue"
          />
        </div>
        <div v-if="[1, 3, 4, 9, 10, 11, 13, 18, 28].includes(subActionOptions)">
          <n-select
            v-model:value="selTaskData.params.action.params.value"
            :options="options[subActionOptions]?.options"
          />
        </div>
        <div v-if="[6, 7, 14, 15, 16, 17, 19, 20, 25, 26].includes(subActionOptions)">
          <n-form-item label="Value" label-placement="left">
            <n-checkbox v-model:checked="selTaskData.params.action.params.value"
          /></n-form-item>
        </div>
        <div v-if="subActionOptions === 8">
          <n-form-item label="Disperse" label-placement="left">
            <n-checkbox v-model:checked="disperse" />
            <n-input-number
              :disabled="!disperse"
              v-model:value="selTaskData.params.action.params.value"
              :min="0"
              :max="250000"
            >
              <template #suffix> s </template>
            </n-input-number>
          </n-form-item>
        </div>
        <div v-if="subActionOptions === 24">
          <n-form-item label="Range" label-placement="left">
            <n-input-number
              v-model:value="selTaskData.params.action.params.value"
              :min="0"
              :max="100"
            >
              <template #suffix> % </template>
            </n-input-number>
          </n-form-item>
        </div>
        <div v-if="subActionOptions === 27">
          <n-form-item label="Value" label-placement="left">
            <n-checkbox v-model:checked="altRestrictionMin" />
            <n-input-number v-model:value="altRestrictionMinData" :min="0" :max="820210">
              <template #suffix> ft </template>
            </n-input-number>
          </n-form-item>
        </div>
        <div v-if="subActionOptions === 29">
          <n-form-item label="Value" label-placement="left">
            <n-checkbox v-model:checked="altRestrictionMax" />
            <n-input-number v-model:value="altRestrictionMaxData" :min="0" :max="820210">
              <template #suffix> ft </template>
            </n-input-number>
          </n-form-item>
        </div>
      </div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import {
  NSelect,
  NInputNumber,
  NInput,
  NCheckbox,
  NButton,
  NFormItem,
  NTreeSelect,
  NCascader,
  TreeSelectOption,
} from "naive-ui";
import { useTasksStore } from "../stores/state";
import { useTasks } from "../utils/hooks";
import { computed, inject, type ComputedRef, ref } from "vue";
import type { ActionType, ITask, UnitType } from "../types";
import { Task, EnrouteTask, PerformCommand, OptionName } from "../utils/enums";
import { availableActions } from "../utils/availableActions";
import { defaultTask } from "../utils/utils";
import { setFormation } from "../utils/setAction";
import { options } from "../utils/actions";
import { watch } from "vue";
import Modal from "./Modal.vue";
import { getFormation } from "../utils/actions/formation";

const { tasks } = useTasks();
const store = useTasksStore();

const conditionModal = inject<boolean>("condition", false);
const stopConditionModal = inject<boolean>("stopCondition", false);

const formOptions = computed(() => {
  if (unitType === "helicopter") {
    return getFormation(unitType);
  } else if (unitType === "plane") {
    return getFormation(unitType);
  } else {
    return [];
  }
});

const formValue = computed({
  get: () => selTaskData.value.params.action.params.value,
  set: (value) => {
    selTaskData.value.params.action.params.value = value;
  },
});

const setFormationValue = (value: number) => {
  formValue.value = value;
  selTaskData.value.params.action.params = setFormation(formValue.value, formOptions.value);
};

const handleTargetTypes = (value: string | Array<string>, option: TreeSelectOption[]) => {
  const getKeys = (option: TreeSelectOption) => {
    if (option.children) {
      const keys: (string | number)[] = [];
      const findKeys = (children: TreeSelectOption[]) => {
        children.forEach((child) => {
          if (child.key) {
            keys.push(child.key);
          }
          if (child.children) {
            findKeys(child.children);
          }
        });
      };
      findKeys(option.children);
      return keys;
    }
    return [];
  };

  const noTargetTypes = option.map((opt) => getKeys(opt)).flat();
  const targetTypes: string[] = value as string[];
  const stringValue = targetTypes.length === 0 ? "none;" : targetTypes.join(";") + ";";
  selTaskData.value.params.action.params = {
    name: selTaskData.value.params.action.params.name,
    noTargetTypes,
    targetTypes,
    value: stringValue,
  };
};

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
    } else if (selOption.label === "Formation") {
      if (unitType === "helicopter") {
        if (formValue.value !== 0) {
          action.value.params = setFormation(formValue.value, formOptions.value);
        } else {
          if (formOptions.value && formOptions.value[0]?.children?.[0]?.key) {
            action.value.params = setFormation(
              formOptions.value[0].children[0].key as number,
              formOptions.value,
            );
          }
        }
      } else if (unitType === "plane") {
        if (formValue.value !== 0) {
          action.value.params = setFormation(formValue.value, formOptions.value);
        } else {
          if (formOptions.value && formOptions.value[0]?.children?.[0]?.value) {
            action.value.params = setFormation(
              formOptions.value[0].children[0].value as number,
              formOptions.value,
            );
          }
        }
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

const name = computed({
  get: () => selTaskData.value.name,
  set: (value) => {
    selTaskData.value.name = value;
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

const disperse = computed(() => selTaskData.value.params.action.params.value === undefined);
const altRestrictionMax = computed(
  () => selTaskData.value.params.action.params.value === undefined,
);
const altRestrictionMaxData = computed({
  get: () => selTaskData.value.params.action.params.value / 3.28084,
  set: (value) => {
    selTaskData.value.params.action.params.value = Math.round(value * 3.28084);
  },
});
const altRestrictionMin = computed(
  () => selTaskData.value.params.action.params.value === undefined,
);

const altRestrictionMinData = computed({
  get: () => selTaskData.value.params.action.params.value / 3.28084,
  set: (value) => {
    selTaskData.value.params.action.params.value = Math.round(value * 3.28084);
  },
});
</script>
