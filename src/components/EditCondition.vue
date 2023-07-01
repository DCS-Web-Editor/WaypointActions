<template>
  <div class="flex justify-center w-11/12">
    <modal>
      <div class="flex">
        <n-form-item class="flex-none mr-5" label="Time More" label-placement="left"
          ><n-checkbox v-model:checked="timeMoreEnabled" />
        </n-form-item>
        <n-time-picker class="flex-1" :disabled="!timeMoreEnabled" />
      </div>
      <div class="flex">
        <n-form-item class="flex-none mr-5" label="Is User Flag" label-placement="left">
          <n-checkbox v-model:checked="isUserFlagEnabled" />
        </n-form-item>
        <n-input-number class="flex-1 mr-5" :disabled="!isUserFlagEnabled" />
        <n-form-item
          :class="!isUserFlagEnabled ? 'opacity-50' : ''"
          label="IS"
          label-placement="left"
          ><n-checkbox v-model:checked="isUserFlagIsEnabled" :disabled="!isUserFlagEnabled" />
        </n-form-item>
      </div>
      <div class="flex">
        <n-form-item class="flex-none mr-5" label="Probability" label-placement="left">
          <n-checkbox v-model:checked="probabilityEnabled" />
        </n-form-item>
        <n-input-number class="flex-1" :min="0" :max="100" :disabled="!probabilityEnabled">
          <template #suffix> % </template>
        </n-input-number>
      </div>
      <div class="flex flex-col mb-6">
        <n-form-item class="flex-none mr-5" label="Condition (LUA Predicate)" label-placement="left"
          ><n-checkbox v-model:checked="conditionEnabled" />
        </n-form-item>
        <n-input type="textarea" :resizable="false" class="flex-1" :disabled="!conditionEnabled" />
      </div>
      <div class="flex" v-if="props.stopCondition">
        <n-form-item class="flex-none mr-5" label="Dur" label-placement="left">
          <n-checkbox v-model:checked="durEnabled" />
        </n-form-item>
        <n-time-picker class="flex-1" :disabled="!durEnabled" />
      </div>
    </modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Modal from "./Modal.vue";
import { NCheckbox, NFormItem, NInput, NTimePicker, NInputNumber } from "naive-ui";

const props = defineProps<{
  stopCondition?: boolean;
}>();

const timeMoreEnabled = ref(false);
const isUserFlagEnabled = ref(false);
const isUserFlagIsEnabled = ref(false);
const probabilityEnabled = ref(false);
const conditionEnabled = ref(false);
const durEnabled = ref(false);
</script>
