/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

/**
 * @todo Fix types and remove eslint disabled rules
 */

import type { ActionList } from "../types";
import { options } from "./options";
import { OptionName, PerformCommand } from "./enums";

function findById(data: any[], id: number): any {
  for (const item of data) {
    if (Array.isArray(item)) {
      for (const arr of item) {
        const foundItem = findById(arr.value, id);
        if (foundItem != null) {
          return foundItem;
        }
      }
    } else if (item.value === id) {
      return item;
    }
  }
  return null;
}

type TOption = {
  label: string;
  value: number | boolean | string;
  data?: number;
  options?: any[];
};

export function parseOption(id: number, value: number | boolean | string): ActionList {
  const option: TOption = options[id];
  if (typeof value === "number" && option.options != null) {
    if (id === OptionName.formation) {
      const form = findById(option.options, value);
      return {
        option: option.label,
        value: form.label,
      };
    }
    return {
      option: option.label,
      value: option.options[value].label,
    };
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
