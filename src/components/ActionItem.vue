<template>
  <div class="flex flex-row text-xs">
    <p class="p-2 pr-0">{{ props.index }}</p>
    <p class="p-2">{{ props.data }}</p>
  </div>
</template>

<script setup lang="ts">
import { Tasks } from "../libs/Tasks";

const props = defineProps<{
  index: number;
  data: Tasks;
}>();
</script>
