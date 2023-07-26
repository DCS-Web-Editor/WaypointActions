import { PerformCommand, type TPerformCommand } from "../consts";
import type { TConstsList } from "../../types";

export const commands: Record<string, TConstsList<TPerformCommand>> = {
  [PerformCommand.noAction]: {
    label: "No Action",
    value: PerformCommand.noAction,
    params: {},
  },
  [PerformCommand.runScript]: {
    label: "Run Script",
    value: PerformCommand.runScript,
    params: {
      command: "",
    },
  },
  [PerformCommand.scriptFile]: {
    label: "Script File",
    value: PerformCommand.scriptFile,
    params: {
      file: "",
    },
  },
  [PerformCommand.setCallsign]: {
    label: "Set Callsign",
    value: PerformCommand.setCallsign,
    params: {},
  },
  [PerformCommand.setFrequency]: {
    label: "Set Frequency",
    value: PerformCommand.setFrequency,
    params: {
      frequency: 131000000.0,
      modulation: 0,
      power: 10,
    },
  },
  [PerformCommand.setFrequencyForUnit]: {
    label: "Set Frequency For Unit",
    value: PerformCommand.setFrequencyForUnit,
    params: {
      frequency: 131000000.0,
      modulation: 0,
      power: 10,
    },
  },
  [PerformCommand.transmitMessage]: {
    label: "Transmit Message",
    value: PerformCommand.transmitMessage,
    params: {
      file: "",
      subtitle: "",
      loop: false,
      duration: 5.0,
    },
  },
  [PerformCommand.stopTransmitting]: {
    label: "Stop Transmitting",
    value: PerformCommand.stopTransmitting,
    params: {},
  },
  [PerformCommand.switchWaypoint]: {
    label: "Switch Waypoint",
    value: PerformCommand.switchWaypoint,
    params: {},
  },
  [PerformCommand.switchAction]: {
    label: "Switch Action",
    value: PerformCommand.switchAction,
    params: {
      actionIndex: 1,
    },
  },
  [PerformCommand.setInvisible]: {
    label: "Set Invisible",
    value: PerformCommand.setInvisible,
    params: {
      value: true,
    },
  },
  [PerformCommand.setImmortal]: {
    label: "Set Immortal",
    value: PerformCommand.setImmortal,
    params: {
      value: true,
    },
  },
  [PerformCommand.start]: {
    label: "Start",
    value: PerformCommand.start,
    params: {},
  },
  [PerformCommand.loadingShip]: {
    label: "Loading Ship",
    value: PerformCommand.loadingShip,
    params: {
      cargo: 0,
    },
  },
  [PerformCommand.activateBeacon]: {
    label: "Activate TACAN",
    value: PerformCommand.activateBeacon,
    params: {
      type: 4,
      system: 4,
      bearing: true,
      modeChannel: "X",
      channel: 1,
      AA: true,
      frequency: 1000000, // add tacan calculation
      callsign: "TKR",
    },
  },
  [PerformCommand.deactivateBeacon]: {
    label: "Deactivate TACAN",
    value: PerformCommand.deactivateBeacon,
    params: {},
  },
  [PerformCommand.activateICLS]: {
    label: "Activate ICLS",
    value: PerformCommand.activateICLS,
    params: {
      type: 131584,
      channel: 1,
    },
  },
  [PerformCommand.deactivateICLS]: {
    label: "Deactivate ICLS",
    value: PerformCommand.deactivateICLS,
    params: {},
  },
  [PerformCommand.activateLink4]: {
    label: "Activate Link 4",
    value: PerformCommand.activateLink4,
    params: {},
  },
  [PerformCommand.deactivateLink4]: {
    label: "Deactivate Link 4",
    value: PerformCommand.deactivateLink4,
    params: {},
  },
  [PerformCommand.activateACLS]: {
    label: "Activate ACLS",
    value: PerformCommand.activateACLS,
    params: {},
  },
  [PerformCommand.deactivateACLS]: {
    label: "Deactivate ACLS",
    value: PerformCommand.deactivateACLS,
    params: {},
  },
  [PerformCommand.loadingShip]: {
    label: "Set Ship Draft",
    value: PerformCommand.loadingShip,
    params: {
      cargo: 0,
    },
  },
  [PerformCommand.elprs]: {
    label: "ELPRS",
    value: PerformCommand.elprs,
    params: {
      value: true,
      groupId: 0,
    },
  },
  [PerformCommand.smokeOnOff]: {
    label: "Smoke On/Off",
    value: PerformCommand.smokeOnOff,
    params: {
      value: true,
    },
  },
};
