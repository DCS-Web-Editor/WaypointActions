import { EnrouteTask } from "./enums";
import type { EnumList } from "../types";

export const enrouteTask: Record<string, EnumList<EnrouteTask>> = {
  [EnrouteTask.noTask]: {
    label: "No Task",
    value: EnrouteTask.noTask,
  },
  [EnrouteTask.antiShip]: {
    label: "Anti Ship",
    value: EnrouteTask.antiShip,
  },
  [EnrouteTask.awacs]: {
    label: "AWACS",
    value: EnrouteTask.awacs,
  },
  [EnrouteTask.cas]: {
    label: "CAS",
    value: EnrouteTask.cas,
  },
  [EnrouteTask.cap]: {
    label: "CAP",
    value: EnrouteTask.cap,
  },
  [EnrouteTask.engageGroup]: {
    label: "Engage Group",
    value: EnrouteTask.engageGroup,
  },
  [EnrouteTask.engageTargets]: {
    label: "Engage Targets",
    value: EnrouteTask.engageTargets,
  },
  [EnrouteTask.engageTargetsInZone]: {
    label: "Engage Targets In Zone",
    value: EnrouteTask.engageTargetsInZone,
  },
  [EnrouteTask.engageUnit]: {
    label: "Engage Unit",
    value: EnrouteTask.engageUnit,
  },
  [EnrouteTask.ewr]: {
    label: "EWR",
    value: EnrouteTask.ewr,
  },
  [EnrouteTask.fac]: {
    label: "FAC",
    value: EnrouteTask.fac,
  },
  [EnrouteTask.facEngageGroup]: {
    label: "FAC Engage Group",
    value: EnrouteTask.facEngageGroup,
  },
  [EnrouteTask.fighterSweep]: {
    label: "Fighter Sweep",
    value: EnrouteTask.fighterSweep,
  },
  [EnrouteTask.recoveryTanker]: {
    label: "Recovery Tanker",
    value: EnrouteTask.recoveryTanker,
  },
  [EnrouteTask.sead]: {
    label: "SEAD",
    value: EnrouteTask.sead,
  },
  [EnrouteTask.shipHoldPoint]: {
    label: "Ship Hold Point",
    value: EnrouteTask.shipHoldPoint,
  },
  [EnrouteTask.tanker]: {
    label: "Tanker",
    value: EnrouteTask.tanker,
  },
};
