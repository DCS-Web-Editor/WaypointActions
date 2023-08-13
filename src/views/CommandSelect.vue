<template>
  <div v-if="subActionOptions === 'Script'">
    <n-input
      type="textarea"
      placeholder="LUA Script..."
      :resizable="false"
      v-model:value="selTaskData.params.action.params.command"
    />
  </div>
  <div v-else-if="subActionOptions === 'ScriptFile' || subActionOptions === 'TransmitMessage'">
    <n-upload accept=".lua" :custom-request="customRequest" :on-remove="removeFile">
      <n-button>Select File</n-button>
    </n-upload>
  </div>
  <div v-if="subActionOptions === 'TransmitMessage'">
    <div>
      <n-form-item label="Subtitle" label-placement="top">
        <n-input
          type="textarea"
          placeholder="Subtitle..."
          :resizable="false"
          v-model:value="selTaskData.params.action.params.subtitle"
        />
      </n-form-item>
    </div>
    <div class="flex justify-between">
      <n-form-item label="Dur" label-placement="left">
        <n-input-number
          :min="1"
          :max="3600"
          v-model:value="selTaskData.params.action.params.duration"
        >
          <template #suffix> s </template>
        </n-input-number>
      </n-form-item>
      <n-form-item label="Loop" label-placement="left">
        <n-checkbox v-model:checked="selTaskData.params.action.params.loop" />
      </n-form-item>
    </div>
  </div>
  <div
    v-else-if="subActionOptions === 'SetFrequency' || subActionOptions === 'SetFrequencyForUnit'"
    class="flex flex-col"
  >
    <n-form-item label="Frequency" label-placement="left">
      <n-input-number
        class="w-full"
        :value="selTaskData.params.action.params.frequency / 1000000"
        @update:value="selTaskData.params.action.params.frequency * 1000000"
      >
        <template #suffix>
          <span class="text-white">MHz</span>
        </template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Modulation" label-placement="left">
      <n-select
        :options="[
          {
            label: 'AM',
            value: 0,
          },
          {
            label: 'FM',
            value: 1,
          },
        ]"
        v-model:value="selTaskData.params.action.params.modulation"
      />
    </n-form-item>
    <n-form-item label="Power" label-placement="left">
      <n-input-number
        class="w-full"
        v-model:value="selTaskData.params.action.params.power"
        :min="0"
        :max="10"
      >
        <template #suffix>
          <span class="text-white">W</span>
        </template>
      </n-input-number>
    </n-form-item>
    <n-form-item
      v-if="subActionOptions === 'SetFrequencyForUnit'"
      label="Unit"
      label-placement="left"
    >
      <n-select :options="arrayToOptions(entry.getGroupIds())" />
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'SwitchWaypoint'">
    <n-form-item label="To Waypoint" label-placement="left">
      <n-select
        :options="numberToOptions(entry.points, entry.currentWaypoint)"
        :value="selTaskData.params.action.params.goToWaypointIndex"
        @update:value="setWaypoint"
      />
    </n-form-item>
  </div>
  <div
    v-else-if="['SetInvisible', 'SetImmortal', 'ELPRS', 'SMOKE_ON_OFF'].includes(subActionOptions)"
  >
    <n-form-item label="Value" label-placement="left"> <n-checkbox /></n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'ActivateBeacon'">
    <n-form-item label="Channel Mode" label-placement="left">
      <n-select
        :options="[
          {
            label: 'X',
            value: 'X',
          },
          {
            label: 'Y',
            value: 'Y',
          },
        ]"
      />
    </n-form-item>
    <n-form-item label="Channel" label-placement="left">
      <n-input-number :min="1" :max="126" />
    </n-form-item>
    <n-form-item label="Callsign" label-placement="left">
      <n-input />
    </n-form-item>
    <n-form-item label="Unit" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Bearing" label-placement="left">
      <n-checkbox />
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'ActivateICLS'">
    <n-form-item label="Channel" label-placement="left">
      <n-input-number :min="1" :max="20" />
    </n-form-item>
    <n-form-item label="Unit" label-placement="left">
      <n-select />
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'ActivateLink4'">
    <n-form-item label="Frequency" label-placement="left">
      <n-input-number :min="225.0" :max="399.9">
        <template #suffix>
          <span class="text-white">MHz</span>
        </template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Unit" label-placement="left">
      <n-select />
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'ActivateACLS'">
    <n-form-item label="Unit" label-placement="left">
      <n-select />
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'LoadingShip'">
    <n-form-item label="Cargo" label-placement="left">
      <n-input-number :min="0" :max="100" :step="10">
        <template #suffix> % </template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Unit" label-placement="left">
      <n-select />
    </n-form-item>
  </div>
  <div v-else>
    <h1 class="text-white">No Options For {{ commands[subActionOptions].label }}</h1>
  </div>
</template>

<script setup lang="ts">
import {
  NInput,
  NUpload,
  NButton,
  NFormItem,
  NInputNumber,
  NSelect,
  NCheckbox,
  UploadCustomRequestOptions,
  UploadFileInfo,
} from "naive-ui";
import type { Files, TUnitType } from "../types";
import { TPerformCommand } from "../utils/consts";
import { commands } from "../utils/actions";
import { useTasksStore } from "../stores/state";
import { computed } from "vue";
import { useEntryStore } from "../stores/entryState";
import { SelectMixedOption } from "naive-ui/es/select/src/interface";

const props = defineProps<{
  selTask: number;
  subActionOptions: TPerformCommand;
  unitType: TUnitType;
}>();

const store = useTasksStore();
const entry = useEntryStore();

const selTaskData = computed({
  get: () => store.getOneTask(props.selTask - 1),
  set: (value) => store.setOneTask(value, props.selTask - 1),
});

let idNum = 6;

const changeId = () => {
  if (entry.maxDictId > idNum) {
    return `ResKey_advancedFile_${entry.maxDictId}`;
  }
  return `ResKey_advancedFile_${idNum++}`;
};

const customRequest = async ({ file, onFinish }: UploadCustomRequestOptions) => {
  const reader = new FileReader();
  reader.onloadend = async function () {
    const id = changeId();
    const fileData: Files = {
      id,
      name: file.name,
      data: await file.file?.text(),
      status: "finished",
    };
    selTaskData.value.params.action.params.file = id;
    entry.setOneFile(fileData);
  };
  onFinish();
  reader.readAsDataURL(file.file as Blob);
};

const removeFile = (data: { file: UploadFileInfo }) => {
  entry.deleteOneFile(data.file.id);
  selTaskData.value.params.action.params.file = "";
  return true;
};

const arrayToOptions = <T extends string | number>(arr: T[]): SelectMixedOption[] => {
  const options: SelectMixedOption[] = [
    {
      label: "Nothing",
      value: undefined,
    },
  ];
  arr.forEach((item) => {
    options.push({
      label: item.toString(),
      value: item,
    });
  });
  return options;
};

const numberToOptions = (number: number, currentWaypoint: number) => {
  if (number < 1) {
    return [];
  } else {
    const options = [];
    for (let i = 0; i < number; i++) {
      if (i !== currentWaypoint) {
        options.push({
          label: i.toString(),
          value: i,
        });
      }
    }
    return options;
  }
};

const setWaypoint = (value: number) => {
  selTaskData.value.params.action.params.fromWaypointIndex = entry.currentWaypoint;
  selTaskData.value.params.action.params.goToWaypointIndex = value;
};
</script>
