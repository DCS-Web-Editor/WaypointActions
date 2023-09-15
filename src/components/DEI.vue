<template>
  <n-form-item label="Distance" label-placement="left">
    <n-slider :step="164" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
    <n-input-number
      :step="164"
      :min="-1312336"
      :max="131234"
      class="w-full"
      :value="distance"
      @update:value="$emit('update:distance', $event)"
    >
      <template #suffix>ft</template>
    </n-input-number>
  </n-form-item>
  <n-form-item label="Elevation" label-placement="left">
    <n-slider :step="33" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
    <n-input-number
      :step="33"
      :min="-1312336"
      :max="131234"
      class="w-full"
      :value="elevation"
      @update:value="$emit('update:elevation', $event)"
    >
      <template #suffix>ft</template>
    </n-input-number>
  </n-form-item>
  <n-form-item label="Interval" label-placement="left">
    <n-slider :step="164" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
    <n-input-number
      :step="164"
      :min="-1312336"
      :max="131234"
      class="w-full"
      :value="interval"
      @update:value="$emit('update:interval', $event)"
    >
      <template #suffix>ft</template>
    </n-input-number>
  </n-form-item>
</template>

<script setup lang="ts">
import { NFormItem, NInputNumber, NSlider } from "naive-ui";

/**
 * @todo change back to required when PerformTask is done
 */
defineProps<{
  distance?: number;
  elevation?: number;
  interval?: number;
}>();

defineEmits(["update:distance", "update:elevation", "update:interval"]);
</script>
