import { EnrouteTask, type TEnrouteTask } from "../consts";
import type { ConstsList } from "../../types";

export const enrouteTask: Record<string, ConstsList<TEnrouteTask>> = {
  [EnrouteTask.noEnrouteTask]: {
    label: "No Task",
    value: EnrouteTask.noEnrouteTask,
    params: {},
  },
  [EnrouteTask.antiShip]: {
    label: "Anti Ship",
    value: EnrouteTask.antiShip,
    params: {
      targetTypes: ["Ships"],
      priority: 0,
    },
  },
  [EnrouteTask.awacs]: {
    label: "AWACS",
    value: EnrouteTask.awacs,
    params: {},
  },
  [EnrouteTask.cas]: {
    label: "CAS",
    value: EnrouteTask.cas,
    params: {
      targetTypes: ["Helicopters", "Ground Units", "Light armed ships"],
      priority: 0,
    },
  },
  [EnrouteTask.cap]: {
    label: "CAP",
    value: EnrouteTask.cap,
    params: {
      targetTypes: ["Air"],
      priority: 0,
    },
  },
  [EnrouteTask.engageGroup]: {
    label: "Engage Group",
    value: EnrouteTask.engageGroup,
    params: {
      groupId: null,
      weaponType: null,
      priority: 1,
    },
  },
  [EnrouteTask.engageTargets]: {
    label: "Engage Targets",
    value: EnrouteTask.engageTargets,
    params: {
      maxDistEnabled: false,
      maxDist: 15000,
    },
  },
  [EnrouteTask.engageTargetsInZone]: {
    label: "Engage Targets In Zone",
    value: EnrouteTask.engageTargetsInZone,
    params: {
      zoneRadius: 5000,
    },
  },
  [EnrouteTask.engageUnit]: {
    label: "Engage Unit",
    value: EnrouteTask.engageUnit,
    params: {
      unitId: null,
      weaponType: null,
      priority: 1,
      groupAttack: false,
      attackQtyLimit: false,
      attackQty: 1,
    },
  },
  [EnrouteTask.ewr]: {
    label: "EWR",
    value: EnrouteTask.ewr,
    params: {},
  },
  [EnrouteTask.fac]: {
    label: "FAC",
    value: EnrouteTask.fac,
    params: {},
  },
  [EnrouteTask.facEngageGroup]: {
    label: "FAC Engage Group",
    value: EnrouteTask.facEngageGroup,
    params: {},
  },
  [EnrouteTask.fighterSweep]: {
    label: "Fighter Sweep",
    value: EnrouteTask.fighterSweep,
    params: {
      targetTypes: ["Planes"],
      priority: 0,
    },
  },
  [EnrouteTask.sead]: {
    label: "SEAD",
    value: EnrouteTask.sead,
    params: {
      targetTypes: ["Air Defence"],
      priority: 0,
    },
  },
  [EnrouteTask.tanker]: {
    label: "Tanker",
    value: EnrouteTask.tanker,
    params: {},
  },
};
