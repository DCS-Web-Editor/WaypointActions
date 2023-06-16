<template>
  <div class="w-300">
    <div class="outline outline-secondary outline-1 p-5 w-full">
      <ul>
        <li
          v-for="(action, index) in actionList"
          :key="index"
          class="cursor-pointer rounded"
          :class="{
            'bg-blue-200 pl-2 text-black': currentSelection === index,
          }"
          @click="handleItemClick(index)"
        >
          <ActionItem :index="index" :option="action.option" :value="action.value" />
        </li>
      </ul>
    </div>
    <div class="mt-2 flex flex-col">
      <div class="flex justify-between">
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button class="w-1/6" size="small">Add</n-button>
          </template>
          <span>Add a new action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button class="w-1/6" size="small">Ins</n-button>
          </template>
          <span>Insert a new action above the selected action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button class="w-1/6" size="small">Edit</n-button>
          </template>
          <span>Edit the selected action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button class="w-1/6" size="small">Del</n-button>
          </template>
          <span>Delete the selected action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button class="w-1/6 p-0" size="small">Clone</n-button>
          </template>
          <span>Clone the selected action</span>
        </n-tooltip>
      </div>
      <div class="flex justify-between mt-2">
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button
              class="w-1/6"
              :disabled="upDisable"
              size="small"
              @click="moveListItemUp(currentSelection)"
            >
              Up
            </n-button>
          </template>
          <span>Move the selected action up in the execution chain</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button
              class="w-1/6 p-0"
              :disabled="downDisable"
              size="small"
              @click="moveListItemDown(currentSelection)"
            >
              Down
            </n-button>
          </template>
          <span>Move the selected action down in the execution chain</span>
        </n-tooltip>
        <div class="w-1/6"></div>
        <div class="w-1/6"></div>
        <div class="w-1/6"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionItem from "./ActionItem.vue";
import parseOption from "../tasks/parseOption";
import { useTasksStore } from "../stores/state";
import { NButton, NTooltip } from "naive-ui";
import { computed, ref, watch } from "vue";
import { ActionList, Tasks } from "../types";

const store = computed(() => useTasksStore());

const actions = computed(() => store.value.getTasks());
const actionList = computed<ActionList[]>(() => updateList(actions.value));

const currentSelection = ref(0);
const upDisable = ref(false);
const downDisable = ref(false);

function handleItemClick(index: number) {
  currentSelection.value = index;
}

function arrayMove(oldIndex: number, newIndex: number): void {
  const arr = [...actions.value];
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  store.value.setTasks(arr);
}

function moveListItemDown(index: number) {
  if (index < actions.value.length - 1) {
    arrayMove(index, index + 1);
    currentSelection.value = index + 1;
  }
}

function moveListItemUp(index: number) {
  if (index <= actions.value.length - 1 && index > 0) {
    arrayMove(index, index - 1);
    currentSelection.value = index - 1;
  }
}

function updateList(task: Tasks): ActionList[] {
  const actionList: ActionList[] = [];
  for (const action of task) {
    if (action.params.action.id === "Option") {
      const parsed = parseOption(
        action.params.action.params.name,
        action.params.action.params.value,
      );
      actionList.push(parsed);
    } else {
      actionList.push({
        option: action.params.action.id,
        value: action.params.action.params.value,
      });
    }
  }
  return actionList;
}

watch(
  currentSelection,
  (val) => {
    if (val === 0) {
      upDisable.value = true;
    } else {
      upDisable.value = false;
    }
    if (val === actionList.value.length - 1) {
      downDisable.value = true;
    } else {
      downDisable.value = false;
    }
    if (actionList.value.length === 0) {
      upDisable.value = true;
      downDisable.value = true;
    } else {
      upDisable.value = currentSelection.value === 0;
      downDisable.value = currentSelection.value === actionList.value.length - 1;
    }
  },
  { immediate: true },
);
</script>
