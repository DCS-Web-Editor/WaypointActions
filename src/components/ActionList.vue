<template>
  <div class="w-80 m-10">
    <div class="outline outline-secondary outline-1 p-5 w-full">
      <ul >
        <li v-for="(action, index) in actionList" :key="index">
          <ActionItem :index="index" :option="action.option" :value="action.value" />
        </li>
      </ul>
    </div>
    <div class="w-4/5 mt-2 justify-between flex">
      <n-button class="m-1 ml-0 mr-0.5" size="small"> Add </n-button>
      <n-button class="m-1 mr-0.5" size="small"> Ins </n-button>
      <n-button class="m-1 mr-0.5" size="small"> Edit </n-button>
      <n-button class="m-1 mr-0.5" size="small"> Del </n-button>
      <n-button class="m-1 mr-0.5" size="small"> Up </n-button>
      <n-button class="m-1 mr-0.5" size="small"> Down </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionItem from "./ActionItem.vue";
import parseOption from "../tasks/options/parseOption";
import { useTasksStore } from "../stores/state";
import { NButton } from "naive-ui";
import { Ref, computed, ref, watch } from "vue";
import { ActionList } from "../types";

const store = computed(() => useTasksStore());

const actions = computed(() => store.value.getTasks());
const actionList: Ref<ActionList[]> = ref([]);

function updateList() {
  for (const action of actions.value.tasks) {
    if (action.params.action.id === "Option") {
      const parsed = parseOption(
        action.params.action.params.name,
        action.params.action.params.value,
      );
      actionList.value.push(parsed);
    } else {
      actionList.value.push({
        option: action.params.action.id,
        value: action.params.action.params.value,
      });
    }
  }
}

watch(actions.value, () => {
  actionList.value = [];
  updateList();
});
</script>
