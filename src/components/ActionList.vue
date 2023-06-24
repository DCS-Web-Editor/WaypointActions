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
            'bg-gray-500 pl-2 text-black': actionList[index].option === 'No Option',
          }"
          @click="handleItemClick(index)"
        >
          <div class="flex flex-row text-xs">
            <span class="p-2 pr-0">{{ index + 1 }}</span>
            <span class="p-2">{{ concat(action.option, action.value) }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-2 flex flex-col">
      <div class="flex justify-between">
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button class="w-1/6" size="small" @click="addListItem()">Add</n-button>
          </template>
          <span>Add a new action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button class="w-1/6" size="small" @click="insertListItem(currentSelection)"
              >Ins</n-button
            >
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
            <n-button class="w-1/6" size="small" @click="deleteListItem(currentSelection)"
              >Del</n-button
            >
          </template>
          <span>Delete the selected action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button class="w-1/6 p-0" size="small" @click="cloneListItem(currentSelection)"
              >Clone</n-button
            >
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
import { parseOption, parseCommand } from "../tasks/parseAction";
import { PerformCommand } from "../tasks/enums";
import { useTasksStore } from "../stores/state";
import { NButton, NTooltip } from "naive-ui";
import { computed, ref, watch } from "vue";
import { ActionList, ITasks } from "../types";
import { createOption } from "../tasks/utils";

// import json from "../../dev.json";

const store = computed(() => useTasksStore());

const actions = computed({
  get: () => store.value.getTasks(),
  set: (value) => store.value.setTasks(value),
});
const actionList = computed<ActionList[]>(() => updateList(actions.value));

const currentSelection = ref(0);
const upDisable = ref(false);
const downDisable = ref(false);

const concat = (option: string, value: string) => {
  if (value === "") {
    return `${option}${value}`;
  }
  return `${option} = ${value}`;
};

function handleItemClick(index: number) {
  currentSelection.value = index;
}

function moveArrayItem(oldIndex: number, newIndex: number): void {
  actions.value.splice(newIndex, 0, actions.value.splice(oldIndex, 1)[0]);
}

function moveListItemDown(index: number) {
  if (index < actions.value.length - 1) {
    moveArrayItem(index, index + 1);
    currentSelection.value = index + 1;
  }
}

function moveListItemUp(index: number) {
  if (index <= actions.value.length - 1 && index > 0) {
    moveArrayItem(index, index - 1);
    currentSelection.value = index - 1;
  }
}

function deleteListItem(index: number) {
  actions.value.splice(index, 1);
}

function insertListItem(index: number) {
  const action = createOption(index, -1, 0);
  actions.value.splice(index, 0, action);
}

function cloneListItem(index: number) {
  const clone = actions.value[index];
  actions.value.push(clone);
}

function addListItem() {
  const index = actions.value.length;
  const action = createOption(index, -1, 0);
  actions.value.splice(index, 0, action);
}

function updateList(task: ITasks): ActionList[] {
  const actionList: ActionList[] = [];
  for (const action of task) {
    if (action.params.action.id === "Option") {
      const parsed = parseOption(
        action.params.action.params.name,
        action.params.action.params.value,
      );
      actionList.push(parsed);
    } else if (Object.values(PerformCommand).includes(action.params.action.id)) {
      const parsed = parseCommand(action.params.action.id, action.params.action.params);
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
    if (
      actionList.value.find((action) => action.option === "No Option") !== undefined &&
      actionList.value[val].option !== "No Option"
    ) {
      deleteListItem(actionList.value.findIndex((action) => action.option === "No Option"));
    }
  },
  { immediate: true },
);

// store.value.setTasks(json.task.params.tasks);
</script>
