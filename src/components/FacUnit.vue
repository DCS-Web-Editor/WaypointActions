<template>
  <slot name="above"></slot>
  <n-form-item label="Callsign" label-placement="left">
    <n-select />
  </n-form-item>
  <n-form-item label="Number" label-placement="left">
    <n-input-number class="w-full" />
  </n-form-item>
  <n-form-item label="Frequency" label-placement="left">
    <n-input-number class="w-full">
      <template #suffix>
        <span class="text-white">MHz</span>
      </template>
    </n-input-number>
  </n-form-item>
  <n-form-item label="Modulation" label-placement="left">
    <n-select
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
</script>
