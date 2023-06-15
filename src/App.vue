<template>
  <n-config-provider
    :theme="selectedTheme === 'Dark' ? theme : null"
    :theme-overrides="selectedTheme === 'Dark' ? themeOverrides : null"
  >
    <div>
      <action-list />
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalTheme, GlobalThemeOverrides } from "naive-ui";
import { NConfigProvider } from "naive-ui";
import { useThemeStore } from "@stores/theme";
import ActionList from "@components/ActionList.vue";
import { ref } from "vue";

const themeStore = useThemeStore();
const theme = ref<GlobalTheme>(themeStore.theme);
const selectedTheme = ref<string>(themeStore.getSelectedTheme);
const themeOverrides = ref<GlobalThemeOverrides>(themeStore.getThemeOverrides);
</script>
