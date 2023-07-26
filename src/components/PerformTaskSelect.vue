<template>
  <div></div>
</template>

<script setup lang="ts">
import { TTask, TUnitType } from "../types";
import { TPerformTask } from "../utils/consts";

// @ts-expect-error
// eslint-disable-next-line no-unused-vars
const props = defineProps<{
  selTaskData: TTask;
  subActionOptions: TPerformTask;
  unitType: TUnitType;
}>();
</script>
