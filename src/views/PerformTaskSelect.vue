<template>
  <div v-if="subActionOptions === 'AttackGroup'">
    <attack-unit>
      <template #above>
        <n-form-item label="Group" label-placement="left">
          <n-select />
        </n-form-item>
      </template>
    </attack-unit>
  </div>
  <div v-else-if="subActionOptions === 'AttackUnit'">
    <attack-unit>
      <template #above>
        <n-form-item label="Group" label-placement="left">
          <n-select />
        </n-form-item>
        <n-form-item label="Unit" label-placement="left">
          <n-select />
        </n-form-item>
        <n-form-item label="Static" label-placement="left">
          <n-select />
        </n-form-item>
      </template>
    </attack-unit>
  </div>
  <div v-else-if="subActionOptions === 'AttackMapObject'">
    <attack-unit />
  </div>
  <div v-else-if="subActionOptions === 'Bombing'">
    <attack-unit>
      <template #below>
        <n-form-item label="Dive Bomb" label-placement="left"><n-checkbox /> </n-form-item>
      </template>
    </attack-unit>
  </div>
  <div v-else-if="subActionOptions === 'BombingRunway'">
    <attack-unit>
      <template #above>
        <n-form-item label="Runway" label-placement="left">
          <n-select />
        </n-form-item>
      </template>
    </attack-unit>
  </div>
  <div
    v-else-if="
      ['CargoTransportation', 'CargoTransportationPlane', 'CargoUnloadPlane'].includes(
        subActionOptions,
      )
    "
  >
    <n-form-item label="Group" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item
      v-if="subActionOptions === 'CargoTransportation'"
      label="Zone"
      label-placement="left"
    >
      <n-select />
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'Orbit'">
    <n-form-item label="Pattern" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Speed" label-placement="left">
      <n-input-number :min="108" :max="336" class="w-full">
        <template #suffix>kt</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Altitude" label-placement="left">
      <n-slider :step="3" :min="0" :max="30561" class="mr-10 mt-0.5" />
      <n-input-number :step="3" :min="0" :max="30561" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'FAC_AttackGroup'">
    <n-form-item label="Group" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Weapon" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Designation" label-placement="left">
      <n-select />
    </n-form-item>
    <fac-unit>
      <template #below>
        <n-form-item class="mr-5" label="Datalink" label-placement="left">
          <n-checkbox />
        </n-form-item>
      </template>
    </fac-unit>
  </div>
  <div v-else-if="subActionOptions === 'Land'" class="flex">
    <n-form-item class="flex-none mr-5" label="Dur" label-placement="left">
      <n-checkbox />
    </n-form-item>
    <n-time-picker class="flex-1" />
  </div>
  <div v-else-if="subActionOptions === 'FireAtPoint'">
    <n-form-item label="Zone Radius" label-placement="left">
      <n-slider :step="3" class="mr-10 mt-0.5" />
      <n-input-number :step="3" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Altitude" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-slider :step="3" class="mr-10 mt-2" />
      <n-input-number :step="3" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
      <n-select
        class="ml-10"
        :options="[
          {
            label: 'MSL',
            value: 'MSL',
          },
          {
            label: 'AGL',
            value: 'AGL',
          },
        ]"
      />
    </div>
    <n-form-item label="Weapon" label-placement="left">
      <n-select />
    </n-form-item>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Rounds Expend" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-input-number :min="1" :max="100" class="w-full" />
    </div>
  </div>
  <div v-else-if="subActionOptions === 'Hold'">
    <n-form-item label="Template" label-placement="left">
      <n-select />
    </n-form-item>
  </div>
  <div v-else-if="subActionOptions === 'Follow'">
    <n-form-item label="Group" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Distance" label-placement="left">
      <n-slider :step="164" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="164" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Elevation" label-placement="left">
      <n-slider :step="33" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="33" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Interval" label-placement="left">
      <n-slider :step="164" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="164" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Last Wpt" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-select />
    </div>
  </div>
  <div v-else-if="subActionOptions === 'Escort'">
    <n-form-item label="Group" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Distance" label-placement="left">
      <n-slider :step="164" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="164" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Elevation" label-placement="left">
      <n-slider :step="33" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="33" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Interval" label-placement="left">
      <n-slider :step="164" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="164" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Last Wpt" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-select />
    </div>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Engage Dist" label-placement="left">
        <n-input-number :min="1" :max="135">
          <template #suffix>nm</template>
        </n-input-number>
      </n-form-item>
    </div>
    <n-cascader class="w-full" check-strategy="child" :show-path="false" />
  </div>
  <div v-if="subActionOptions === 'EmbarkToTransport'">
    <n-form-item label="Vehicle Type" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Zone Radius" label-placement="left">
      <n-input-number :step="3" :min="0" :max="6562" />
    </n-form-item>
  </div>
  <div v-if="subActionOptions === 'GoToWaypoint'">
    <n-form-item label="To Waypoint" label-placement="left">
      <n-select />
    </n-form-item>
  </div>
  <div v-if="subActionOptions === 'Embarking'">
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="On Land" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-time-picker class="flex-1" />
    </div>
    <n-form-item class="mr-5" label="Distribution" label-placement="left">
      <n-checkbox />
    </n-form-item>
    <n-form-item class="mr-5" label="From Start" label-placement="left">
      <n-checkbox />
    </n-form-item>
    <n-form-item class="mr-5" label="Units" label-placement="left">
      <n-transfer ref="transfer" />
    </n-form-item>
  </div>
  <div v-if="subActionOptions === 'Disembarking'">
    <n-form-item class="mr-5" label="Units" label-placement="left">
      <n-transfer ref="transfer" />
    </n-form-item>
  </div>
  <div v-if="subActionOptions === 'Aerobatics'">
    <!-- TODO -->
  </div>
  <div v-if="subActionOptions === 'CarpetBombing'">
    <n-form-item label="Weapon" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Rel Qty" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Pattern Length" label-placement="left">
      <n-slider :step="3" :min="0" :max="9843" class="mr-10 mt-0.5" />
      <n-input-number :step="3" :min="0" :max="9843" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Altitude Above" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-slider :step="3" :min="0" :max="68898" class="mr-10 mt-2" />
      <n-input-number :step="3" :min="0" :max="68898" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </div>
  </div>
  <div v-if="subActionOptions === 'FollowBigFormation'">
    <n-form-item label="Group" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Distance" label-placement="left">
      <n-slider :step="164" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="164" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Elevation" label-placement="left">
      <n-slider :step="33" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="33" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Interval" label-placement="left">
      <n-slider :step="164" :min="-1312336" :max="131234" class="mr-10 mt-0.5" />
      <n-input-number :step="164" :min="-1312336" :max="131234" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Formation Type" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Position in Wing" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Position in Group" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Position in Box" label-placement="left">
      <n-select />
    </n-form-item>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Last Wpt" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-select />
    </div>
  </div>
  <div v-if="subActionOptions === 'GroundEscort'">
    <n-form-item label="Group" label-placement="left">
      <n-select />
    </n-form-item>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Last Wpt" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-select />
    </div>
    <n-form-item label="Forward Dist" label-placement="left">
      <n-slider :step="3" :min="1640" :max="8202" class="mr-10 mt-0.5" />
      <n-input-number :step="3" :min="1640" :max="8202" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
  </div>
  <div v-if="subActionOptions === 'RecoveryTanker'">
    <n-form-item label="Group" label-placement="left">
      <n-select />
    </n-form-item>
    <n-form-item label="Speed" label-placement="left">
      <n-input-number :min="108" :max="545" class="w-full">
        <template #suffix>kt</template>
      </n-input-number>
    </n-form-item>
    <n-form-item label="Altitude" label-placement="left">
      <n-slider :step="3" :min="0" :max="30561" class="mr-10 mt-0.5" />
      <n-input-number :step="3" :min="0" :max="30561" class="w-full">
        <template #suffix>ft</template>
      </n-input-number>
    </n-form-item>
    <div class="flex">
      <n-form-item class="flex-none mr-5" label="Last Wpt" label-placement="left">
        <n-checkbox />
      </n-form-item>
      <n-select />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TTask, TUnitType } from "../types";
import { TPerformTask } from "../utils/consts";
import {
  NFormItem,
  NSelect,
  NCheckbox,
  NInputNumber,
  NSlider,
  NTimePicker,
  NTransfer,
} from "naive-ui";
import AttackUnit from "../components/AttackUnit.vue";
import FacUnit from "../components/FacUnit.vue";

// @ts-expect-error
// eslint-disable-next-line no-unused-vars
const props = defineProps<{
  selTaskData: TTask;
  subActionOptions: TPerformTask;
  unitType: TUnitType;
}>();
</script>
