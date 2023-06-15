<template>
  <div>
    <ul>
      <li v-for="(action, index) in actionList" :key="index">
        <ActionItem :index="index" :option="action.option" :value="action.value" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ActionItem from "./ActionItem.vue";
import parseOption from "../tasks/options/parseOption";
import { useTasksStore } from "../stores/state";
import { Ref, computed, ref } from "vue";
import { ActionList } from "../types";

const store = computed(() => useTasksStore());

const actions = store.value.getTasks();

const actionList: Ref<ActionList[]> = ref([]);

for (const action of actions.tasks) {
  if (action.params.action.id === "Option") {
    const parsed = parseOption(action.params.action.params.name, action.params.action.params.value);
    actionList.value.push(parsed);
  } else {
    actionList.value.push({
      option: action.params.action.id,
      value: action.params.action.params.value,
    });
  }
}
</script>
