<template>
  <div>
    <ul>
      <li v-for="(action, index) in actions.tasks" :key="index">
        <ActionItem
          :index="index"
          :option="
            parseOption(action.params.action.params.name, action.params.action.params.value).option
          "
          :value="
            parseOption(action.params.action.params.name, action.params.action.params.value).value
          "
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ActionItem from "./ActionItem.vue";
import parseOption from "../libs/parseOption";
import { useTasksStore } from "../stores/state";
import { computed } from "vue";

const store = computed(() => useTasksStore());

const actions = store.value.getTasks();
</script>
