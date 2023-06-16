<template>
  <div class="flex flex-row text-xs">
    <span class="p-2 pr-0" >{{ props.index + 1 }}</span>
    <span class="p-2">{{ concat(props.option, props.value) }}</span>
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
