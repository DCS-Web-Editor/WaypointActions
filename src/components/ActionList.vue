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
          <ActionItem :index="index" :option="action.option" :value="action.value" />
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
import ActionItem from "./ActionItem.vue";
import { parseOption } from "../tasks/parseAction";
import { useTasksStore } from "../stores/state";
import { NButton, NTooltip } from "naive-ui";
import { computed, ref, watch } from "vue";
import { ActionList, Tasks } from "../types";

// import json from "../../dev.json";

const store = computed(() => useTasksStore());

const actions = computed(() => store.value.getTasks());
const actionList = computed<ActionList[]>(() => updateList(actions.value));

const currentSelection = ref(0);
const upDisable = ref(false);
const downDisable = ref(false);

function createOption(
  index: number,
  name: number,
  value: number | string | boolean,
  auto?: boolean,
): void {
  const arr = [...actions.value];
  arr.splice(index, 0, {
    auto: auto ?? false,
    enabled: true,
    id: "WrappedAction",
    number: index,
    params: {
      action: {
        id: "Option",
        params: {
          name,
          value,
        },
      },
    },
  });
  store.value.setTasks(arr);
}

function handleItemClick(index: number) {
  currentSelection.value = index;
}

function moveArrayItem(oldIndex: number, newIndex: number): void {
  const arr = [...actions.value];
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  store.value.setTasks(arr);
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
  const arr = [...actions.value];
  arr.splice(index, 1);
  store.value.setTasks(arr);
}

function insertListItem(index: number) {
  createOption(index, -1, 0);
}

function cloneListItem(index: number) {
  const arr = [...actions.value];
  const clone = { ...arr[index] };
  arr.push(clone);
  store.value.setTasks(arr);
}

function addListItem() {
  createOption(actions.value.length, -1, 0);
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
