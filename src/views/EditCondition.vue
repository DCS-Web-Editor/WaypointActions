<template>
  <div class="flex justify-center flex-col w-11/12">
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Time More" label-placement="left"
        ><n-checkbox v-model:checked="timeMoreEnabled" />
      </n-form-item>
      <n-input-number
        class="flex-1"
        :disabled="!timeMoreEnabled"
        v-model:value="conditionData.time"
      >
        <template #suffix> s </template>
      </n-input-number>
    </div>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Is User Flag" label-placement="left">
        <n-checkbox v-model:checked="isUserFlagEnabled" />
      </n-form-item>
      <n-input-number
        class="flex-1 mr-5"
        :disabled="!isUserFlagEnabled"
        v-model:value="conditionData.userFlag"
      />
      <n-form-item :class="!isUserFlagEnabled ? 'opacity-50' : ''" label="IS" label-placement="left"
        ><n-checkbox v-model:checked="isUserFlagIsEnabled" :disabled="!isUserFlagEnabled" />
      </n-form-item>
    </div>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Probability" label-placement="left">
        <n-checkbox v-model:checked="probabilityEnabled" :disabled="props.stopCondition" />
      </n-form-item>
      <n-input-number
        class="flex-1"
        :min="0"
        :max="100"
        :disabled="!probabilityEnabled"
        v-model:value="conditionData.probability"
      >
        <template #suffix> % </template>
      </n-input-number>
    </div>
    <div class="flex flex-col mb-6">
      <n-form-item class="flex-none mr-5" label="Condition (LUA Predicate)" label-placement="left"
        ><n-checkbox v-model:checked="conditionEnabled" />
      </n-form-item>
      <n-input
        type="textarea"
        :resizable="false"
        class="flex-1"
        :disabled="!conditionEnabled"
        v-model:value="conditionData.condition"
      />
    </div>
    <div class="flex" v-if="props.stopCondition">
      <n-form-item class="flex-none mr-5" label="Dur" label-placement="left">
        <n-checkbox v-model:checked="durEnabled" />
      </n-form-item>
      <n-input-number
        class="flex-1"
        :disabled="!durEnabled"
        v-model:value="(conditionData as TStopCondition).duration"
      >
        <template #suffix> s </template>
      </n-input-number>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { NCheckbox, NFormItem, NInput, NInputNumber } from "naive-ui";
import { useTasksStore } from "../stores/state";
import type { TCondition, TStopCondition } from "../types";

const props = defineProps<{
  stopCondition?: boolean;
  selTask: number;
}>();

const store = useTasksStore();
const conditionData = ref<TStopCondition | TCondition>(
  props.stopCondition
    ? store.getStopCondition(props.selTask)?.condition ?? {}
    : store.getCondition(props.selTask)?.condition ?? {},
);

watch(
  conditionData,
  (value) => {
    if (props.stopCondition) {
      store.setStopCondition(props.selTask, value);
    } else {
      store.setCondition(props.selTask, value);
    }
  },
  { deep: true },
);

const isUserFlagEnabled = computed({
  get: () => conditionData.value.userFlag !== undefined,
  set: (value) => {
    conditionData.value.userFlag = value ? 0 : undefined;
  },
});
const timeMoreEnabled = computed({
  get: () => conditionData.value.time !== undefined,
  set: (value) => {
    conditionData.value.time = value ? 0 : undefined;
  },
});
const isUserFlagIsEnabled = computed({
  get: () => conditionData.value.userFlagValue !== undefined,
  set: (value) => {
    conditionData.value.userFlagValue = value ? false : undefined;
  },
});

const probabilityEnabled = computed({
  get: () => {
    if (!props.stopCondition) {
      if ((conditionData.value as TCondition).probability === undefined) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  },
  set: (value) => {
    if (!props.stopCondition) {
      (conditionData.value as TCondition).probability = value ? 0 : undefined;
    }
  },
});
const conditionEnabled = computed({
  get: () => conditionData.value.condition !== undefined,
  set: (value) => {
    conditionData.value.condition = value ? "" : undefined;
  },
});
const durEnabled = computed({
  get: () => {
    if (props.stopCondition) {
      if ((conditionData.value as TStopCondition).duration === undefined) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  },
  set: (value) => {
    if (props.stopCondition) {
      (conditionData.value as TStopCondition).duration = value ? 0 : undefined;
    }
  },
});
</script>
