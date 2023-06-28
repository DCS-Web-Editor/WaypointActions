<template>
  <n-config-provider :theme="theme" :theme-overrides="theme === null ? null : themeOverrides">
    <div class="grid h-screen place-items-center">
      <action-list />
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, type GlobalTheme, type GlobalThemeOverrides } from "naive-ui";
import { NConfigProvider } from "naive-ui";
import ActionList from "./components/ActionList.vue";
import { ref } from "vue";

const theme = ref<GlobalTheme | null>(darkTheme);
const themeOverrides: GlobalThemeOverrides = {
  common: {
    bodyColor: "#23313f",
    cardColor: "#293949",
    railColor: "#555",
    primaryColorSuppl: "#fff",
  },
};
</script>
