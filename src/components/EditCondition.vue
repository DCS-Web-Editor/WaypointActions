<template>
  <div class="flex justify-center w-11/12">
    <modal>
      <n-form-item label="Time More" label-placement="left"><n-checkbox /></n-form-item>
      <n-form-item label="Is User Flag" label-placement="left"> <n-checkbox /></n-form-item>
      <n-form-item label="Probability" label-placement="left"> <n-checkbox /></n-form-item>
      <n-form-item label="Condition (LUA Predicate)" label-placement="left"
        ><n-checkbox />
      </n-form-item>
      <n-input type="textarea" :resizable="false" />
      <n-form-item v-if="props.stopCondition" label="Dur" label-placement="left">
        <n-checkbox
      /></n-form-item>
    </modal>
  </div>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue";
import { NCheckbox, NFormItem, NInput } from "naive-ui";

const props = defineProps<{
  stopCondition?: boolean;
}>();
</script>
