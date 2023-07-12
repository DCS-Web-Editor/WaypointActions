/* eslint-disable @typescript-eslint/restrict-template-expressions */

import type { ActionList, UnitType } from "../types";
import { getFormation } from "./actions/formation";
import { options } from "./actions/options";
import { EnrouteTask, OptionName, PerformCommand, Task } from "./consts";
import { findByIdKey } from "./utils";

interface TOption {
  label: string;
  value: number | boolean | string;
  data?: number;
  options?: any[];
}

export function parseOption(
  id: number,
  value: number | boolean | string,
  unitType?: UnitType,
): ActionList {
  const option: TOption = options[id];
  if (typeof value === "number") {
    if (option.options != null) {
      if (id === OptionName.roe) {
        return {
          option: option.label,
          value:
            option.options[unitType === "plane" || unitType === "helicopter" ? 0 : 1][value - 1]
              .label,
        };
      }
      return {
        option: option.label,
        value: option.options[value].label,
      };
    } else if (
      (id === OptionName.formation && unitType != null && unitType === "plane") ||
      unitType === "helicopter"
    ) {
      const form = findByIdKey(getFormation(unitType), value);
      return {
        option: option.label,
        value: form.item.label,
      };
    }
  }
  if (typeof value === "boolean") {
    return {
      option: option.label,
      value: value ? "Yes" : "No",
    };
  }
  if (typeof value === "string") {
    return {
      option: option.label,
      value,
    };
  }
  if (option.data != null) {
    return {
      option: option.label,
      value: `${option.data}ft`,
    };
  }
  return {
    option: "Option Not Found",
    value: "",
  };
}
/**
 * @todo Go through each command and add unit names to ones that need it (e.g. "Set ACLS")
 */

export function parseCommand(id: string, value: any): ActionList {
  switch (id) {
    case PerformCommand.noAction:
      return {
        option: "No Action",
        value: "",
      };
    case PerformCommand.runScript:
      return {
        option: "Run Script",
        value: "",
      };
    case PerformCommand.scriptFile:
      return {
        option: "Script File",
        value: value.file,
      };
    case PerformCommand.setFrequency:
      return {
        option: "Set Frequency",
        value: `${value.frequency / 1000000}MHz`,
      };
    case PerformCommand.setFrequencyForUnit:
      return {
        option: "Set Frequency For Unit",
        value: `${value.frequency / 1000000}MHz`,
      };
    case PerformCommand.transmitMessage:
      return {
        option: "Transmit Message",
        value: `${value.file}, ${value.subtitle}, ${value.loop ? "On" : "Off"}`,
      };
    case PerformCommand.stopTransmitting:
      return {
        option: "Stop Transmitting",
        value: "",
      };
    case PerformCommand.switchWaypoint:
      return {
        option: "Switch Waypoint",
        value: "",
      };
    case PerformCommand.switchAction:
      return {
        option: "Switch Action",
        value: value.actionIndex,
      };
    case PerformCommand.setInvisible:
      return {
        option: "Set Invisible",
        value: value.value ? "Yes" : "No",
      };
    case PerformCommand.setImmortal:
      return {
        option: "Set Immortal",
        value: value.value ? "Yes" : "No",
      };
    case PerformCommand.start:
      return {
        option: "Start",
        value: "",
      };
    case PerformCommand.loadingShip:
      return {
        option: "Loading Ship",
        value: value.cargo,
      };
    case PerformCommand.activateBeacon:
      return {
        option: "Activate TACAN",
        value: `${value.bearing ? "BRG," : ""} ${value.channel}${value.modeChannel}, ${
          value.callsign
        }`,
      };
    case PerformCommand.deactivateBeacon: {
      return {
        option: "Deactivate TACAN",
        value: "",
      };
    }
    case PerformCommand.activateICLS:
      return {
        option: "Activate ICLS",
        value: `${value.channel}`,
      };
    case PerformCommand.deactivateICLS:
      return {
        option: "Deactivate ICLS",
        value: "",
      };
    case PerformCommand.activateLink4:
      return {
        option: "Activate Link 4",
        value: "",
      };
    case PerformCommand.deactivateLink4:
      return {
        option: "Deactivate Link 4",
        value: "",
      };
    case PerformCommand.activateACLS:
      return {
        option: "Activate ACLS",
        value: "",
      };
    case PerformCommand.deactivateACLS:
      return {
        option: "Deactivate ACLS",
        value: "",
      };
    case PerformCommand.elprs:
      return {
        option: "ELPRS",
        value: `${value.value ? "On" : "Off"}`,
      };
    case PerformCommand.smokeOnOff:
      return {
        option: "Smoke On/Off",
        value: `${value.value ? "On" : "Off"}`,
      };
    default:
      return {
        option: "Command Not Found",
        value: "",
      };
  }
}
/**
 * @todo finish value parsing
 */

// @ts-expect-error DCS not avail for val usage

export function parseTask(id: string, value: any): ActionList {
  switch (id) {
    case Task.noTask: {
      return {
        option: "No Task",
        value: "",
      };
    }
    case Task.attackGroup: {
      return {
        option: "Attack Group",
        value: "",
      };
    }
    case Task.attackUnit: {
      return {
        option: "Attack Unit",
        value: "",
      };
    }
    case Task.attackMapObject: {
      return {
        option: "Attack Map Object",
        value: "",
      };
    }
    case Task.bombing: {
      return {
        option: "Bombing",
        value: "",
      };
    }
    case Task.bombingRunway: {
      return {
        option: "Bombing Runway",
        value: "",
      };
    }
    case Task.orbit: {
      return {
        option: "Orbit",
        value: "",
      };
    }
    case Task.land: {
      return {
        option: "Land",
        value: "",
      };
    }
    case Task.refueling: {
      return {
        option: "Refueling",
        value: "",
      };
    }
    case Task.facAttackGroup: {
      return {
        option: "FAC - Attack Group",
        value: "",
      };
    }
    case Task.fireAtPoint: {
      return {
        option: "Fire At Point",
        value: "",
      };
    }
    case Task.hold: {
      return {
        option: "Hold",
        value: "",
      };
    }
    case Task.follow: {
      return {
        option: "Follow",
        value: "",
      };
    }
    case Task.escort: {
      return {
        option: "Escort",
        value: "",
      };
    }
    case Task.embarkToTransport: {
      return {
        option: "Embark To Transport",
        value: "",
      };
    }
    case Task.goToWaypoint: {
      return {
        option: "Go To Waypoint",
        value: "",
      };
    }
    case Task.embarking: {
      return {
        option: "Embarking",
        value: "",
      };
    }
    case Task.disembarking: {
      return {
        option: "Embarking",
        value: "",
      };
    }
    case Task.attachTrailer: {
      return {
        option: "Attach Trailer",
        value: "",
      };
    }
    case Task.detachTrailer: {
      return {
        option: "Detach Trailer",
        value: "",
      };
    }
    case Task.cargoTransportation: {
      return {
        option: "Cargo Transportation",
        value: "",
      };
    }
    case Task.cargoUnloadPlane: {
      return {
        option: "Cargo Unload",
        value: "",
      };
    }
    case Task.aerobatics: {
      return {
        option: "Aerobatics",
        value: "",
      };
    }
    case Task.carpetBombing: {
      return {
        option: "Carpet Bombing",
        value: "",
      };
    }
    case Task.followBigFormation: {
      return {
        option: "Big Formation",
        value: "",
      };
    }
    case Task.groundEscort: {
      return {
        option: "Ground Escort",
        value: "",
      };
    }
    case Task.paratroopersDrop: {
      return {
        option: "Drop Paratroopers",
        value: "",
      };
    }
    case Task.shipHoldPoint: {
      return {
        option: "Hold",
        value: "",
      };
    }
    case Task.recoveryTanker: {
      return {
        option: "Recovery Tanker",
        value: "",
      };
    }
    default:
      return {
        option: "Task Not Found",
        value: "",
      };
  }
}

/**
 * @todo finish value parsing
 */

// @ts-expect-error DCS not avail for val usage

export function parseEnrouteTask(id: string, value: any): ActionList {
  switch (id) {
    case EnrouteTask.noEnrouteTask: {
      return {
        option: "No Enroute Task",
        value: "",
      };
    }
    case EnrouteTask.engageTargets: {
      return {
        option: "Engage Targets",
        value: "",
      };
    }
    case EnrouteTask.engageTargetsInZone: {
      return {
        option: "Engage Targets In Zone",
        value: "",
      };
    }
    case EnrouteTask.engageGroup: {
      return {
        option: "Engage Group",
        value: "",
      };
    }
    case EnrouteTask.engageUnit: {
      return {
        option: "Engage Unit",
        value: "",
      };
    }
    case EnrouteTask.awacs: {
      return {
        option: "AWACS",
        value: "",
      };
    }
    case EnrouteTask.ewr: {
      return {
        option: "EWR",
        value: "",
      };
    }
    case EnrouteTask.tanker: {
      return {
        option: "Tanker",
        value: "",
      };
    }
    case EnrouteTask.fac: {
      return {
        option: "FAC",
        value: "",
      };
    }
    case EnrouteTask.facEngageGroup: {
      return {
        option: "FAC - Engage Group",
        value: "",
      };
    }
    case EnrouteTask.fighterSweep: {
      return {
        option: "Fighter Sweep",
        value: "",
      };
    }
    case EnrouteTask.cas: {
      return {
        option: "CAS",
        value: "",
      };
    }
    case EnrouteTask.cap: {
      return {
        option: "CAP",
        value: "",
      };
    }
    case EnrouteTask.sead: {
      return {
        option: "SEAD",
        value: "",
      };
    }
    case EnrouteTask.antiShip: {
      return {
        option: "Anti-Ship",
        value: "",
      };
    }
    default: {
      return {
        option: "No Enroute Task Found",
        value: "",
      };
    }
  }
}
