<template>
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
      :options="formOptions(unitType)"
      check-strategy="child"
      :show-path="false"
      @update-value="setFormationValue"
      v-model:value="selTaskData.params.action.params.value"
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
      <n-input-number v-model:value="selTaskData.params.action.params.value" :min="0" :max="100">
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
</template>

<script setup lang="ts">
import {
  NFormItem,
  NInputNumber,
  NCheckbox,
  NCascader,
  NTreeSelect,
  NSelect,
  type TreeSelectOption,
} from "naive-ui";
import { computed } from "vue";
import { ITask, UnitType } from "../types";
import { setFormation, formOptions } from "../utils/setAction";
import { options } from "../utils/actions";

const props = defineProps<{
  selTaskData: ITask<any>;
  subActionOptions: number;
  unitType: UnitType;
}>();

const selTaskData = computed(() => props.selTaskData);
const unitType = computed(() => props.unitType);

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

const setFormationValue = (value: number) => {
  selTaskData.value.params.action.params = setFormation(unitType.value, value);
};

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
