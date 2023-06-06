<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <ActionItem :index="index + 1" :data="concat(task.label, task.value)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import ActionItem from "./ActionItem.vue";
import json from "../../dev.json";
import { parseTask } from "../libs/parse";

const tasks = parseTask(json.task);

const concat = (a: string, b: string) => `${a} = ${b}`;
</script>
