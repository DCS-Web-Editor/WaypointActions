<template>
  <n-card class="w-3/4">
    <n-space vertical>
      <slot></slot>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NSpace } from "naive-ui";
</script>
