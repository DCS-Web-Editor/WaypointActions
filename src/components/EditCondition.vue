<template>
  <div class="flex justify-center w-11/12">
    <modal v-if="props.condition"> </modal>
    <modal v-if="!props.condition"> </modal>
  </div>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue";

const props = defineProps<{
  condition: boolean;
}>();
</script>
