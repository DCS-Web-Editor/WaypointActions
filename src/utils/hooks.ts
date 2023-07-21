import { computed } from "vue";
import { useTasksStore } from "../stores/state";
import { useEntryStore } from "../stores/entryState";

export const useTasks = () => {
  const store = computed(() => useTasksStore());

  const tasks = computed({
    get: () => store.value.getTasks(),
    set: (value) => {
      store.value.setTasks(value);
    },
  });
  return {
    tasks,
  };
};

export const useEntry = () => {
  const store = computed(() => useEntryStore());

  const unit = computed({
    get: () => store.value.getUnit(),
    set: (value) => {
      store.value.setUnit(value);
    },
  });

  const taskCatagory = computed({
    get: () => store.value.getTaskCatagory(),
    set: (value) => {
      store.value.setTaskCatagory(value);
    },
  });

  const actionType = computed({
    get: () => store.value.getActionType(),
    set: (value) => {
      store.value.setActionType(value);
    },
  });

  const waypointNumber = computed({
    get: () => store.value.getWaypointNumber(),
    set: (value) => {
      store.value.setWaypointNumber(value);
    },
  });

  return {
    unit,
    taskCatagory,
    actionType,
    waypointNumber,
  };
};
