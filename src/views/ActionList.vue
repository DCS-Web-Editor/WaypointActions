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
            <span class="p-2">{{
              concat(action.option, action.value, action.attr ?? [], tasks[index].name ?? "")
            }}</span>
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
            <n-button
              class="w-1/6"
              :disabled="disabledActionButtons"
              size="small"
              @click="insertListItem(currentSelection)"
              >Ins</n-button
            >
          </template>
          <span>Insert a new action above the selected action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button
              class="w-1/6"
              :disabled="disabledActionButtons"
              size="small"
              @click="editListItem"
              >Edit</n-button
            >
          </template>
          <span>Edit the selected action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button
              class="w-1/6"
              :disabled="disabledActionButtons"
              size="small"
              @click="deleteListItem(currentSelection)"
              >Del</n-button
            >
          </template>
          <span>Delete the selected action</span>
        </n-tooltip>
        <n-tooltip trigger="hover"
          ><template #trigger>
            <n-button
              class="w-1/6 p-0"
              :disabled="disabledActionButtons"
              size="small"
              @click="cloneListItem(currentSelection)"
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
    <n-modal
      v-model:show="editModalShow"
      :on-after-leave="removeNoOption"
      preset="card"
      class="w-3/4"
      title="Edit Action"
    >
      <edit-action />
    </n-modal>
    <n-modal v-model:show="condition" preset="card" class="w-3/4" title="Edit Condition">
      <edit-condition />
    </n-modal>
    <n-modal v-model:show="stopCondition" preset="card" class="w-3/4" title="Edit Stop Condition">
      <edit-condition :stop-condition="true" />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { parseCommand, parseEnrouteTask, parseOption, parseTask } from "../utils/parseAction";
import EditCondition from "./EditCondition.vue";
import EditAction from "./EditAction.vue";
import { EnrouteTask, PerformCommand, Task } from "../utils/consts";
import { useTasks, useEntry } from "../utils/hooks";
import { NButton, NTooltip, NModal } from "naive-ui";
import { computed, ref, watch, provide, toRaw, onMounted } from "vue";
import { TActionList, TTask } from "../types";
import { createAutoActions, defaultAction } from "../utils/setAction";

const { tasks } = useTasks();
const { unit, actionType, taskCatagory, waypointNumber } = useEntry();

const actionList = computed<TActionList[]>(() => updateList(tasks.value));
const currentSelection = ref(0);
const disabledActionButtons = computed(
  () => actionList.value.length === 0 || currentSelection.value === -1,
);
const upDisable = ref(false);
const downDisable = ref(false);

const editModalShow = ref(false);
const condition = ref(false);
const stopCondition = ref(false);

provide(
  "condition",
  computed({ get: () => condition.value, set: (value) => (condition.value = value) }),
);
provide(
  "stopCondition",
  computed({ get: () => stopCondition.value, set: (value) => (stopCondition.value = value) }),
);

provide(
  "selection",
  computed({
    get: () => currentSelection.value + 1,
    set: (value) => {
      currentSelection.value = value - 1;
    },
  }),
);

const concat = (option: string, value: string, attr: string[], name: string) => {
  if (value === "") {
    return `${option}${value} ${name ? `"${name}"` : ""} ${attr.join(" ")}`;
  }
  return `${option} = ${value} ${name ? `"${name}"` : ""} ${attr.join(" ")}`;
};

function sequenceNumbers() {
  for (const task in tasks.value) {
    if (tasks.value[task].number !== tasks.value.indexOf(tasks.value[task]) + 1) {
      tasks.value[task].number = tasks.value.indexOf(tasks.value[task]) + 1;
    }
  }
}

watch(
  () => tasks.value,
  () => {
    sequenceNumbers();
  },
  { deep: true },
);

function handleItemClick(index: number) {
  currentSelection.value = index;
}

function moveArrayItem(oldIndex: number, newIndex: number): void {
  tasks.value.splice(newIndex, 0, tasks.value.splice(oldIndex, 1)[0]);
}

function moveListItemDown(index: number) {
  if (index < tasks.value.length - 1) {
    moveArrayItem(index, index + 1);
    currentSelection.value = index + 1;
  }
}

function moveListItemUp(index: number) {
  if (index <= tasks.value.length - 1 && index > 0) {
    moveArrayItem(index, index - 1);
    currentSelection.value = index - 1;
  }
}

function deleteListItem(index: number) {
  tasks.value.splice(index, 1);
}

function insertListItem(index: number) {
  const action = defaultAction(actionType.value);
  tasks.value.splice(index, 0, action);
  editModalShow.value = true;
}

function cloneListItem(index: number) {
  const clone = structuredClone(toRaw(tasks.value[index]));
  clone.number++;
  currentSelection.value = index + 1;
  tasks.value.push(clone);
}

function removeNoOption() {
  const index = actionList.value.findIndex((action) => {
    return (
      action.option === "No Option" ||
      action.option === "No Task" ||
      action.option === "No Enroute Task" ||
      action.option === "No Action"
    );
  });
  if (index !== -1) {
    deleteListItem(index);
  }
}

function editListItem() {
  editModalShow.value = true;
}

function addListItem() {
  const index = tasks.value.length;
  currentSelection.value = index;
  const action = defaultAction(actionType.value);
  tasks.value.splice(index, 0, action);
  editModalShow.value = true;
}

function parseAttribute(action: TTask): string[] {
  const attr: string[] = [];
  if (action.auto) {
    attr.push("-a");
  }
  if (!action.enabled) {
    attr.push("-x");
  }
  return attr;
}

function updateList(task: TTask[]): TActionList[] {
  if (task.length === 0) {
    return [];
  }
  return task.map((action) => {
    if (action.id === "WrappedAction") {
      if (action.params.action.id === "Option") {
        const option = parseOption(
          action.params.action.params.name,
          action.params.action.params.value,
          unit.value,
        );
        return {
          option: option.option,
          value: option.value,
          attr: parseAttribute(action),
        };
      } else if (Object.values(PerformCommand).some((v) => v === action.params.action.id)) {
        const command = parseCommand(action.params.action.id, action.params.action.params);
        return {
          option: command.option,
          value: command.value,
          attr: parseAttribute(action),
        };
      } else {
        return {
          option: "Error Parsing Action",
          value: "",
          attr: [],
        };
      }
    } else if (Object.values(EnrouteTask).some((v) => v === action.id)) {
      const enrouteTask = parseEnrouteTask(action.id, action.params);
      return {
        option: enrouteTask.option,
        value: enrouteTask.value,
        attr: parseAttribute(action),
      };
    } else if (Object.values(Task).some((v) => v === action.id)) {
      const task = parseTask(action.id, action.params);
      return {
        option: task.option,
        value: task.value,
        attr: parseAttribute(action),
      };
    } else {
      return {
        option: "Error Parsing Action",
        value: "",
        attr: [],
      };
    }
  });
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
      removeNoOption();
    }
  },
  { immediate: true },
);

onMounted(() => {
  if (tasks.value.length === 0 && waypointNumber.value === 0) {
    tasks.value = createAutoActions(unit.value, taskCatagory.value);
  }
});

// import json from "../../dev.json";
// import { useTasksStore } from "../stores/state";
// import { computed } from "vue";

// const store = computed(() => useTasksStore());
// store.value.setTasks(json.task.params.tasks);
</script>
