<template>
  <div v-if="subActionOptions === 'AttackGroup'">
    <attack-unit>
      <template #above>
        <n-form-item label="Group" label-placement="left">
          <n-select />
        </n-form-item>
      </template>
    </attack-unit>
  </div>
  <div v-if="subActionOptions === 'AttackUnit'">
    <attack-unit>
      <template #above>
        <n-form-item label="Group" label-placement="left">
          <n-select />
        </n-form-item>
        <n-form-item label="Unit" label-placement="left">
          <n-select />
        </n-form-item>
        <n-form-item label="Static" label-placement="left">
          <n-select />
        </n-form-item>
      </template>
    </attack-unit>
  </div>
  <div v-if="subActionOptions === 'AttackMapObject'">
    <attack-unit />
  </div>
  <div v-if="subActionOptions === 'Bombing'">
    <attack-unit>
      <template #below>
        <n-form-item label="Dive Bomb" label-placement="left"><n-checkbox /> </n-form-item>
      </template>
    </attack-unit>
  </div>
  <div v-if="subActionOptions === 'BombingRunway'">
    <attack-unit>
      <template #above>
        <n-form-item label="Runway" label-placement="left">
          <n-select />
        </n-form-item>
      </template>
    </attack-unit>
  </div>
</template>

<script setup lang="ts">
import { TTask, TUnitType } from "../types";
import { TPerformTask } from "../utils/consts";
import { NFormItem, NSelect, NCheckbox } from "naive-ui";
import AttackUnit from "./AttackUnit.vue";

// @ts-expect-error
// eslint-disable-next-line no-unused-vars
const props = defineProps<{
  selTaskData: TTask;
  subActionOptions: TPerformTask;
  unitType: TUnitType;
}>();
</script>
