<template>
  <div></div>
</template>

<script setup lang="ts">
import { TUnitType } from "../types";
import { TEnrouteTask } from "../utils/consts";

// @ts-expect-error
// eslint-disable-next-line no-unused-vars
const props = defineProps<{
  selTask: number;
  subActionOptions: TEnrouteTask;
  unitType: TUnitType;
}>();
</script>
