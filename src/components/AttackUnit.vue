<template>
  <slot name="above"></slot>
  <n-form-item label="Weapon" label-placement="left">
    <n-select
      v-model:value="weapon"
      :options="weaponOptions"
      @update:value="(val: number) => $emit('update:weapon', val)"
    />
  </n-form-item>
  <n-form-item label="Rel Qty" label-placement="left">
    <n-select v-model:value="relQty" />
  </n-form-item>
  <div class="flex">
    <n-form-item class="mr-5" label="Max Attack Qty" label-placement="left"
      ><n-checkbox v-model:checked="maxAtkQtyEnabled" />
    </n-form-item>
    <n-input-number
      class="flex-1"
      :min="1"
      :max="1000"
      v-model:value="maxAtkQty"
      :disabled="!maxAtkQtyEnabled"
      @update:value="(val) => $emit('update:maxAtkQty', val)"
    />
    <n-form-item class="ml-5" label="Group Attack" label-placement="left"
      ><n-checkbox
        v-model:checked="groupAtk"
        @update:value="(val) => $emit('update:groupAtk', val)"
      />
    </n-form-item>
  </div>
  <n-form-item label="Direction From" label-placement="left">
    <n-input-number
      v-model:value="directionFrom"
      :min="0"
      :format="compassDir"
      class="w-full"
      @update:value="(val) => $emit('update:directionFrom', val)"
    >
      <template #suffix>°</template>
    </n-input-number>
  </n-form-item>
  <div class="flex">
    <n-form-item class="flex-none mr-5" label="Altitude Above" label-placement="left">
      <n-checkbox v-model:checked="altitudeAboveEnabled" />
    </n-form-item>
    <n-slider
      :step="1"
      :min="0"
      :max="62336"
      class="w-full mr-10 mt-2"
      v-model:value="altitudeAbove"
    >
    </n-slider>
    <n-input-number
      :step="1"
      :min="0"
      :max="62336"
      class="w-full"
      v-model:value="altitudeAbove"
      @update:value="(val) => $emit('update:altitudeAbove', val)"
    >
      <template #suffix>ft</template>
    </n-input-number>
  </div>
  <slot name="below"></slot>
</template>

<script setup lang="ts">
import { NFormItem, NCheckbox, NSelect, NInputNumber, NSlider } from "naive-ui";
import { getWeaponOptions } from "../utils/utils";
import { computed, ref, toRef, watch } from "vue";
import { useEntryStore } from "../stores/entryState";

const props = withDefaults(
  defineProps<{
    weapon: number;
    relQty: number;
    maxAtkQty: number;
    groupAtk: boolean;
    directionFrom: number;
    altitudeAbove: number;
  }>(),
  {
    weapon: 0,
    relQty: 1,
    maxAtkQty: 1,
    groupAtk: false,
    directionFrom: 0,
    altitudeAbove: 1,
  },
);

const weapon = toRef(props.weapon);
const relQty = toRef(props.relQty);
const maxAtkQty = toRef(props.maxAtkQty);
const groupAtk = toRef(props.groupAtk);
const directionFrom = toRef(props.directionFrom);
const altitudeAbove = toRef(props.altitudeAbove);

const maxAtkQtyEnabled = ref(false);

watch(
  maxAtkQty,
  (val) => {
    if (val) {
      maxAtkQtyEnabled.value = true;
    } else {
      maxAtkQtyEnabled.value = false;
    }
  },
  { immediate: true },
);

const altitudeAboveEnabled = ref(false);

watch(
  altitudeAbove,
  (val) => {
    if (val) {
      altitudeAboveEnabled.value = true;
    } else {
      altitudeAboveEnabled.value = false;
    }
  },
  { immediate: true },
);

const entry = useEntryStore();

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

const weaponOptions = computed(() =>
  getWeaponOptions(entry.getUnit(), entry.getTargetGroup(), entry.getTaskCatagory()),
);

defineEmits([
  "update:weapon",
  "update:relQty",
  "update:maxAtkQty",
  "update:groupAtk",
  "update:directionFrom",
  "update:altitudeAbove",
]);
</script>
