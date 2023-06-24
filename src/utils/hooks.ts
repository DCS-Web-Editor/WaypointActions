import { computed } from "vue";
import { useTasksStore } from "../stores/state";

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
