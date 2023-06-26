<template>
  <n-card class="w-3/4">
    <n-space vertical>
      <div class="flex flex-row justify-between">
        <h1 class="text-base font-medium w-1/5">Type</h1>
        <n-select v-model:value="actionType" :options="taskOptions" />
      </div>
      <div class="flex flex-row justify-between">
        <h1 class="text-base font-medium w-1/5">Action</h1>
        <h1 class="text-base font-medium">TODO</h1>
      </div>
      <div class="flex flex-row justify-between">
        <h1 class="text-base font-medium w-1/5">Number</h1>
        <div class="flex flex-row w-full justify-between">
          <n-input-number
            v-model:value="selTask"
            :min="selTaskIndex[0]"
            :max="selTaskIndex.length"
          />
          <div class="grid grid-flow-col gap-x-2">
            <h1 class="text-base font-medium">Enabled</h1>
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
import { computed, watch, inject, type ComputedRef, ref } from "vue";
import { ITask } from "../types";
import { Task, EnrouteTask, PerformCommand } from "../utils/enums";

const { tasks } = useTasks();
const store = useTasksStore();

function getActionType(task: ITask) {
  if (Object.values(Task).includes(task.params.action.id)) {
    return 0;
  } else if (Object.values(EnrouteTask).includes(task.params.action.id)) {
    return 1;
  } else if (Object.values(PerformCommand).includes(task.params.action.id)) {
    return 2;
  } else if (task.params.action.id === "Option") {
    return 3;
  } else {
    return null;
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

const actionType = ref(getActionType(selTaskData.value));

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
    value: 0,
  },
  {
    label: "Start Enroute Task",
    value: 1,
  },
  {
    label: "Perform Command",
    value: 2,
  },
  {
    label: "Set Option",
    value: 3,
  },
];
</script>
