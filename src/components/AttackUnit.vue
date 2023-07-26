<template>
  <slot name="above"></slot>
  <n-form-item label="Weapon" label-placement="left">
    <n-select />
  </n-form-item>
  <n-form-item label="Rel Qty" label-placement="left">
    <n-select />
  </n-form-item>
  <div class="flex">
    <n-form-item class="mr-5" label="Max Attack Qty" label-placement="left"
      ><n-checkbox />
    </n-form-item>
    <n-input-number class="flex-1" :min="1" :max="1000" />
    <n-form-item class="ml-5" label="Group Attack" label-placement="left"
      ><n-checkbox />
    </n-form-item>
  </div>
  <n-form-item label="Direction From" label-placement="left">
    <n-input-number :min="0" :format="compassDir" class="w-full">
      <template #suffix>°</template>
    </n-input-number>
  </n-form-item>
  <div class="flex">
    <n-form-item class="flex-none mr-5" label="Altitude Above" label-placement="left"
      ><n-checkbox />
    </n-form-item>
    <n-slider :step="1" :min="0" :max="62336" class="w-full mr-10 mt-2"> </n-slider>
    <n-input-number :step="1" :min="0" :max="62336" class="w-full">
      <template #suffix>ft</template>
    </n-input-number>
  </div>
  <slot name="below"></slot>
</template>

<script setup lang="ts">
import { NFormItem, NCheckbox, NSelect, NInputNumber, NSlider } from "naive-ui";

const compassDir = (wind: number | null): string => {
  if (wind === null) {
    return "";
  } else if (wind > 359) {
    return "000";
  } else if (wind < 100) {
    const result = wind.toString().padStart(3, "0");
    return result;
  } else {
    return wind.toString();
  }
};
</script>
