<template>
  <n-config-provider
    :theme="darkTheme"
    :theme-overrides="darkTheme === null ? null : themeOverrides"
  >
    <div class="grid h-screen place-items-center">
      <action-list />
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, type GlobalThemeOverrides, NConfigProvider } from "naive-ui";
import ActionList from "./views/ActionList.vue";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    bodyColor: "#23313f",
    cardColor: "#293949",
    railColor: "#555",
    primaryColorSuppl: "#fff",
  },
};
</script>
