<template>
  <slot name="above"></slot>
  <n-form-item label="Callsign" label-placement="left">
    <n-select v-model:value="callsign" @update:value="(val) => $emit('update:callsign', val)" />
  </n-form-item>
  <n-form-item label="Number" label-placement="left">
    <n-input-number
      v-model:value="number"
      @update:value="(val) => $emit('update:number', val)"
      class="w-full"
    />
  </n-form-item>
  <n-form-item label="Frequency" label-placement="left">
    <n-input-number
      v-model:value="freq"
      @update:value="(val) => $emit('update:freq', val)"
      class="w-full"
    >
      <template #suffix>
        <span class="text-white">MHz</span>
      </template>
    </n-input-number>
  </n-form-item>
  <n-form-item label="Modulation" label-placement="left">
    <n-select
      v-model:value="modulation"
      @update:value="(val) => $emit('update:modulation', val)"
      :options="[
        {
          label: 'AM',
          value: 0,
        },
        {
          label: 'FM',
          value: 1,
        },
      ]"
    />
  </n-form-item>
  <slot name="below"></slot>
</template>

<script setup lang="ts">
import { NFormItem, NSelect, NInputNumber } from "naive-ui";
import { computed, toRef } from "vue";

const props = withDefaults(
  defineProps<{
    callsign: string;
    number: number;
    freq: number;
    modulation: number;
  }>(),
  {
    callsign: "Colt 1-1",
    number: 1,
    freq: 131600000,
    modulation: 0,
  },
);

const freq = computed({
  get: () => props.freq / 1000000,
  set: () => props.freq * 1000000,
});
const number = toRef(props.number);
const callsign = toRef(props.callsign);
const modulation = toRef(props.modulation);

defineEmits(["update:freq", "update:number", "update:callsign", "update:modulation"]);
</script>
