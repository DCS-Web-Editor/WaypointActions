<template>
  <div class="flex flex-row text-xs">
    <p class="p-2 pr-0">{{ props.index + 1 }}</p>
    <p class="p-2">{{ concat(props.option, props.value) }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  index: number;
  option: string;
  value: string;
}>();

const concat = (option: string, value: string) => {
  return `${option} = ${value}`;
};
</script>
