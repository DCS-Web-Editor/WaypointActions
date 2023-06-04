<template>
  <ul>
    <li>
      <ActionItem />
    </li>
  </ul>
</template>

<script setup lang="ts">
import ActionItem from "./ActionItem.vue";
import { Tasks } from "../libs/Tasks";

const props = defineProps<{
  data: Tasks;
}>();
</script>
