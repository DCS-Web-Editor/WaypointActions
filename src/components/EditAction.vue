<template>
  <n-space class="w-1/4" vertical>
    <div class="flex flex-row justify-between">
      <h1 class="text-base font-medium">Type</h1>
      <n-select class="w-4/5" v-model:value="val" :options="taskOptions"></n-select>
    </div>
    <div class="flex flex-row justify-between">
      <h1 class="text-base font-medium">Action</h1>
      <h1 class="text-base font-medium">TODO</h1>
    </div>
    <div class="flex flex-row justify-between">
      <h1 class="text-base font-medium">Number</h1>
      <n-input-number v-model:value="select" :min="num[0]" :max="num.length" />
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { NSpace, NSelect, NInputNumber } from "naive-ui";
import { useTasks } from "../utils/hooks";
import { ref, computed, inject } from "vue";

const { tasks } = useTasks();
const val = ref(0);
const num = computed(() => tasks.value.map((task) => task.number + 1));
const select = inject<number>("selection", 0);

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
