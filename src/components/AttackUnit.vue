<template>
  <slot name="above"></slot>
  <n-form-item label="Weapon" label-placement="left">
    <n-select v-model:value="selTaskData.params.weaponType" :options="weaponOptions" />
  </n-form-item>
  <n-form-item label="Rel Qty" label-placement="left">
    <n-select :value="selTaskData.params.expend" :options="expendOptions" />
  </n-form-item>
  <div class="flex">
    <n-form-item class="mr-5" label="Max Attack Qty" label-placement="left"
      ><n-checkbox v-model:checked="selTaskData.params.attackQtyLimit" />
    </n-form-item>
    <n-input-number
      class="flex-1"
      :min="1"
      :max="1000"
      v-model:value="selTaskData.params.attackQty"
      :disabled="!selTaskData.params.attackQtyLimit"
    />
    <n-form-item class="ml-5" label="Group Attack" label-placement="left"
      ><n-checkbox v-model:checked="selTaskData.params.groupAttack" />
    </n-form-item>
  </div>
  <n-form-item label="Direction From" label-placement="left">
    <n-input-number
      v-model:value="selTaskData.params.direction"
      :min="0"
      :format="compassDir"
      class="w-full"
      @update:value="
        (val) =>
          val
            ? (selTaskData.params.directionEnabled = true)
            : (selTaskData.params.directionEnabled = undefined)
      "
    >
      <template #suffix>°</template>
    </n-input-number>
  </n-form-item>
  <div class="flex">
    <n-form-item class="flex-none mr-5" label="Altitude Above" label-placement="left">
      <n-checkbox v-model:checked="selTaskData.params.altitudeEnabled" />
    </n-form-item>
    <n-slider
      :step="1"
      :min="0"
      :max="62336"
      class="w-full mr-10 mt-2"
      v-model:value="selTaskData.params.altitude"
    >
    </n-slider>
    <n-input-number
      :step="1"
      :min="0"
      :max="62336"
      class="w-full"
      v-model:value="selTaskData.params.altitude"
    >
      <template #suffix>ft</template>
    </n-input-number>
  </div>
  <slot name="below"></slot>
</template>

<script setup lang="ts">
import { NFormItem, NCheckbox, NSelect, NInputNumber, NSlider, SelectOption } from "naive-ui";
import type { TTask } from "../types";
import { getWeaponOptions } from "../utils/utils";
import { computed } from "vue";
import { useEntryStore } from "../stores/entryState";
import { useTasksStore } from "../stores/state";

interface TAttackUnit {
  altitude?: number;
  altitudeEnabled?: true;
  attackQty?: number;
  attackQtyLimit?: true;
  direction?: number;
  directionEnabled?: true;
  expend?: "Auto" | "One" | "Two" | "Four" | "Quarter" | "Half" | "All";
  groupAttack?: true;
  groupId?: number;
  weaponType?: number;
}

const entry = useEntryStore();
const store = useTasksStore();
const props = defineProps<{ selTask: number }>();

const selTaskData = computed<TTask<TAttackUnit>>({
  get: () => store.getOneTask(props.selTask - 1),
  set: (value) => store.setOneTask(value, props.selTask - 1),
});

const compassDir = (wind: number | null) => {
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

const expendOptions: SelectOption[] = ["Auto", "One", "Two", "Four", "Quarter", "Half", "All"].map(
  (val) => {
    return {
      label: val,
      value: val,
    };
  },
);
</script>
