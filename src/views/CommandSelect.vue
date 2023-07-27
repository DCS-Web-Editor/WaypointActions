<template>
  <div v-if="subActionOptions === 'Script'">
    <n-input type="textarea" placeholder="LUA Script..." :resizable="false" />
  </div>
  <div v-else-if="subActionOptions === 'ScriptFile'" class="flex">
    <n-input :resizable="false" placeholder="" :readonly="true" class="flex-inital mr-5" />
    <n-upload class="flex-1">
      <n-button>Select File</n-button>
    </n-upload>
  </div>
  <div
    v-else-if="subActionOptions === 'SetFrequency' || subActionOptions === 'SetFrequencyForUnit'"
    class="flex flex-col"
  >
    <n-form-item label="Frequency" label-placement="left">
      <n-input-number class="w-full">
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
      />
    </n-form-item>
    <n-form-item label="Power" label-placement="left">
      <n-input-number class="w-full">
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
      <n-select />
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'TransmitMessage'">
    <div class="flex mb-5">
      <n-input :resizable="false" placeholder="" :readonly="true" class="flex-inital mr-5" />
      <n-upload class="flex-1">
        <n-button>Select File</n-button>
      </n-upload>
    </div>
    <div>
      <n-form-item label="Subtitle" label-placement="top">
        <n-input type="textarea" placeholder="Subtitle..." :resizable="false" />
      </n-form-item>
    </div>
    <div class="flex justify-between">
      <n-form-item label="Dur" label-placement="left">
        <n-input-number :min="1" :max="3600">
          <template #suffix> s </template>
        </n-input-number>
      </n-form-item>
      <n-form-item label="Loop" label-placement="left">
        <n-checkbox />
      </n-form-item>
    </div>
  </div>
  <div v-else-if="subActionOptions === 'SwitchWaypoint'">
    <n-form-item label="To Waypoint" label-placement="left">
      <n-select />
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
import { NInput, NUpload, NButton, NFormItem, NInputNumber, NSelect, NCheckbox } from "naive-ui";
import { TTask, TUnitType } from "../types";
import { TPerformCommand } from "../utils/consts";
import { commands } from "../utils/actions";

// @ts-expect-error
// eslint-disable-next-line no-unused-vars
const props = defineProps<{
  selTaskData: TTask;
  subActionOptions: TPerformCommand;
  unitType: TUnitType;
}>();
</script>
