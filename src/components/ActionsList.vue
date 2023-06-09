<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <ActionItem :index="index + 1" :data="" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import ActionItem from "./ActionItem.vue";
</script>
