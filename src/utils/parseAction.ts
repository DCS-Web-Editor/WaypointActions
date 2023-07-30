/* eslint-disable @typescript-eslint/restrict-template-expressions */

import type { TActionList, TUnitType } from "../types";
import { options, getFormation } from "./actions";
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
  unitType?: TUnitType,
): TActionList {
  const option: TOption = options[id];
  if (typeof value === "number") {
    if (option.options != null) {
      if (id === OptionName.roe) {
        return {
          option: option.label,
          value:
            option.options[unitType === "plane" || unitType === "helicopter" ? 0 : 1][value - 1]
              .label,
          actionType: "options",
        };
      } else {
        return {
          option: option.label,
          value: option.options.find((val) => val.value === value)?.label ?? "Option Not Found",
          actionType: "options",
        };
      }
    } else if (
      (id === OptionName.formation && unitType != null && unitType === "plane") ||
      unitType === "helicopter"
    ) {
      const form = findByIdKey(getFormation(unitType), value);
      return {
        option: option.label,
        value: form.item.label,
        actionType: "options",
      };
    }
  }
  if (typeof value === "boolean") {
    return {
      option: option.label,
      value: value ? "Yes" : "No",
      actionType: "options",
    };
  }
  if (typeof value === "string") {
    return {
      option: option.label,
      value,
      actionType: "options",
    };
  }
  if (option.data != null) {
    return {
      option: option.label,
      value: `${option.data}ft`,
      actionType: "options",
    };
  }
  return {
    option: "Option Not Found",
    value: "",
    actionType: "options",
  };
}
/**
 * @todo Go through each command and add unit names to ones that need it (e.g. "Set ACLS")
 */

export function parseCommand(id: string, value: any): TActionList {
  switch (id) {
    case PerformCommand.noAction:
      return {
        option: "No Action",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.runScript:
      return {
        option: "Run Script",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.scriptFile:
      return {
        option: "Script File",
        value: value.file,
        actionType: "commands",
      };
    case PerformCommand.setFrequency:
      return {
        option: "Set Frequency",
        value: `${value.frequency / 1000000}MHz`,
        actionType: "commands",
      };
    case PerformCommand.setFrequencyForUnit:
      return {
        option: "Set Frequency For Unit",
        value: `${value.frequency / 1000000}MHz`,
        actionType: "commands",
      };
    case PerformCommand.transmitMessage:
      return {
        option: "Transmit Message",
        value: `${value.file}, ${value.subtitle}, ${value.loop ? "On" : "Off"}`,
        actionType: "commands",
      };
    case PerformCommand.stopTransmitting:
      return {
        option: "Stop Transmitting",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.switchWaypoint:
      return {
        option: "Switch Waypoint",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.switchAction:
      return {
        option: "Switch Action",
        value: value.actionIndex,
        actionType: "commands",
      };
    case PerformCommand.setInvisible:
      return {
        option: "Set Invisible",
        value: value.value ? "Yes" : "No",
        actionType: "commands",
      };
    case PerformCommand.setImmortal:
      return {
        option: "Set Immortal",
        value: value.value ? "Yes" : "No",
        actionType: "commands",
      };
    case PerformCommand.start:
      return {
        option: "Start",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.loadingShip:
      return {
        option: "Loading Ship",
        value: value.cargo,
        actionType: "commands",
      };
    case PerformCommand.activateBeacon:
      return {
        option: "Activate TACAN",
        value: `${value.bearing ? "BRG," : ""} ${value.channel}${value.modeChannel}, ${
          value.callsign
        }`,
        actionType: "commands",
      };
    case PerformCommand.deactivateBeacon: {
      return {
        option: "Deactivate TACAN",
        value: "",
        actionType: "commands",
      };
    }
    case PerformCommand.activateICLS:
      return {
        option: "Activate ICLS",
        value: `${value.channel}`,
        actionType: "commands",
      };
    case PerformCommand.deactivateICLS:
      return {
        option: "Deactivate ICLS",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.activateLink4:
      return {
        option: "Activate Link 4",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.deactivateLink4:
      return {
        option: "Deactivate Link 4",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.activateACLS:
      return {
        option: "Activate ACLS",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.deactivateACLS:
      return {
        option: "Deactivate ACLS",
        value: "",
        actionType: "commands",
      };
    case PerformCommand.elprs:
      return {
        option: "ELPRS",
        value: `${value.value ? "On" : "Off"}`,
        actionType: "commands",
      };
    case PerformCommand.smokeOnOff:
      return {
        option: "Smoke On/Off",
        value: `${value.value ? "On" : "Off"}`,
        actionType: "commands",
      };
    default:
      return {
        option: "Command Not Found",
        value: "",
        actionType: "commands",
      };
  }
}
/**
 * @todo finish value parsing
 */

// @ts-expect-error DCS not avail for val usage

export function parseTask(id: string, value: any): TActionList {
  switch (id) {
    case Task.noTask: {
      return {
        option: "No Task",
        value: "",
        actionType: "task",
      };
    }
    case Task.attackGroup: {
      return {
        option: "Attack Group",
        value: "",
        actionType: "task",
      };
    }
    case Task.attackUnit: {
      return {
        option: "Attack Unit",
        value: "",
        actionType: "task",
      };
    }
    case Task.attackMapObject: {
      return {
        option: "Attack Map Object",
        value: "",
        actionType: "task",
      };
    }
    case Task.bombing: {
      return {
        option: "Bombing",
        value: "",
        actionType: "task",
      };
    }
    case Task.bombingRunway: {
      return {
        option: "Bombing Runway",
        value: "",
        actionType: "task",
      };
    }
    case Task.orbit: {
      return {
        option: "Orbit",
        value: "",
        actionType: "task",
      };
    }
    case Task.land: {
      return {
        option: "Land",
        value: "",
        actionType: "task",
      };
    }
    case Task.refueling: {
      return {
        option: "Refueling",
        value: "",
        actionType: "task",
      };
    }
    case Task.facAttackGroup: {
      return {
        option: "FAC - Attack Group",
        value: "",
        actionType: "task",
      };
    }
    case Task.fireAtPoint: {
      return {
        option: "Fire At Point",
        value: "",
        actionType: "task",
      };
    }
    case Task.hold: {
      return {
        option: "Hold",
        value: "",
        actionType: "task",
      };
    }
    case Task.follow: {
      return {
        option: "Follow",
        value: "",
        actionType: "task",
      };
    }
    case Task.escort: {
      return {
        option: "Escort",
        value: "",
        actionType: "task",
      };
    }
    case Task.embarkToTransport: {
      return {
        option: "Embark To Transport",
        value: "",
        actionType: "task",
      };
    }
    case Task.goToWaypoint: {
      return {
        option: "Go To Waypoint",
        value: "",
        actionType: "task",
      };
    }
    case Task.embarking: {
      return {
        option: "Embarking",
        value: "",
        actionType: "task",
      };
    }
    case Task.disembarking: {
      return {
        option: "Embarking",
        value: "",
        actionType: "task",
      };
    }
    case Task.attachTrailer: {
      return {
        option: "Attach Trailer",
        value: "",
        actionType: "task",
      };
    }
    case Task.detachTrailer: {
      return {
        option: "Detach Trailer",
        value: "",
        actionType: "task",
      };
    }
    case Task.cargoTransportation: {
      return {
        option: "Cargo Transportation",
        value: "",
        actionType: "task",
      };
    }
    case Task.cargoUnloadPlane: {
      return {
        option: "Cargo Unload",
        value: "",
        actionType: "task",
      };
    }
    case Task.aerobatics: {
      return {
        option: "Aerobatics",
        value: "",
        actionType: "task",
      };
    }
    case Task.carpetBombing: {
      return {
        option: "Carpet Bombing",
        value: "",
        actionType: "task",
      };
    }
    case Task.followBigFormation: {
      return {
        option: "Big Formation",
        value: "",
        actionType: "task",
      };
    }
    case Task.groundEscort: {
      return {
        option: "Ground Escort",
        value: "",
        actionType: "task",
      };
    }
    case Task.paratroopersDrop: {
      return {
        option: "Drop Paratroopers",
        value: "",
        actionType: "task",
      };
    }
    case Task.shipHoldPoint: {
      return {
        option: "Hold",
        value: "",
        actionType: "task",
      };
    }
    case Task.recoveryTanker: {
      return {
        option: "Recovery Tanker",
        value: "",
        actionType: "task",
      };
    }
    default:
      return {
        option: "Task Not Found",
        value: "",
        actionType: "task",
      };
  }
}

/**
 * @todo finish value parsing
 */

// @ts-expect-error DCS not avail for val usage

export function parseEnrouteTask(id: string, value: any): TActionList {
  switch (id) {
    case EnrouteTask.noEnrouteTask: {
      return {
        option: "No Enroute Task",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.engageTargets: {
      return {
        option: "Engage Targets",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.engageTargetsInZone: {
      return {
        option: "Engage Targets In Zone",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.engageGroup: {
      return {
        option: "Engage Group",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.engageUnit: {
      return {
        option: "Engage Unit",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.awacs: {
      return {
        option: "AWACS",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.ewr: {
      return {
        option: "EWR",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.tanker: {
      return {
        option: "Tanker",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.fac: {
      return {
        option: "FAC",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.facEngageGroup: {
      return {
        option: "FAC - Engage Group",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.fighterSweep: {
      return {
        option: "Fighter Sweep",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.cas: {
      return {
        option: "CAS",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.cap: {
      return {
        option: "CAP",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.sead: {
      return {
        option: "SEAD",
        value: "",
        actionType: "enrouteTask",
      };
    }
    case EnrouteTask.antiShip: {
      return {
        option: "Anti-Ship",
        value: "",
        actionType: "enrouteTask",
      };
    }
    default: {
      return {
        option: "No Enroute Task Found",
        value: "",
        actionType: "enrouteTask",
      };
    }
  }
}
