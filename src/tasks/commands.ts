import { PerformCommand } from "./enums";

interface TCommand {
  label: string;
  value: PerformCommand;
}

export const commands: Record<string, TCommand> = {
  [PerformCommand.noAction]: {
    label: "No Action",
    value: PerformCommand.noAction,
  },
  [PerformCommand.runScript]: {
    label: "Run Script",
    value: PerformCommand.runScript,
  },
  [PerformCommand.scriptFile]: {
    label: "Script File",
    value: PerformCommand.scriptFile,
  },
  [PerformCommand.setCallsign]: {
    label: "Set Callsign",
    value: PerformCommand.setCallsign,
  },
  [PerformCommand.setFrequency]: {
    label: "Set Frequency",
    value: PerformCommand.setFrequency,
  },
  [PerformCommand.setFrequencyForUnit]: {
    label: "Set Frequency For Unit",
    value: PerformCommand.setFrequencyForUnit,
  },
  [PerformCommand.transmitMessage]: {
    label: "Transmit Message",
    value: PerformCommand.transmitMessage,
  },
  [PerformCommand.stopTransmitting]: {
    label: "Stop Transmitting",
    value: PerformCommand.stopTransmitting,
  },
  [PerformCommand.switchWaypoint]: {
    label: "Switch Waypoint",
    value: PerformCommand.switchWaypoint,
  },
  [PerformCommand.switchAction]: {
    label: "Switch Action",
    value: PerformCommand.switchAction,
  },
  [PerformCommand.setInvisible]: {
    label: "Set Invisible",
    value: PerformCommand.setInvisible,
  },
  [PerformCommand.setImmortal]: {
    label: "Set Immortal",
    value: PerformCommand.setImmortal,
  },
  [PerformCommand.start]: {
    label: "Start",
    value: PerformCommand.start,
  },
  [PerformCommand.loadingShip]: {
    label: "Loading Ship",
    value: PerformCommand.loadingShip,
  },
  [PerformCommand.activateBeacon]: {
    label: "Activate Beacon",
    value: PerformCommand.activateBeacon,
  },
  [PerformCommand.deactivateBeacon]: {
    label: "Deactivate Beacon",
    value: PerformCommand.deactivateBeacon,
  },
  [PerformCommand.activateICLS]: {
    label: "Activate ICLS",
    value: PerformCommand.activateICLS,
  },
  [PerformCommand.deactivateICLS]: {
    label: "Deactivate ICLS",
    value: PerformCommand.deactivateICLS,
  },
  [PerformCommand.activateLink4]: {
    label: "Activate Link 4",
    value: PerformCommand.activateLink4,
  },
  [PerformCommand.deactivateLink4]: {
    label: "Deactivate Link 4",
    value: PerformCommand.deactivateLink4,
  },
  [PerformCommand.activateACLS]: {
    label: "Activate ACLS",
    value: PerformCommand.activateACLS,
  },
  [PerformCommand.deactivateACLS]: {
    label: "Deactivate ACLS",
    value: PerformCommand.deactivateACLS,
  },
  [PerformCommand.elprs]: {
    label: "ELPRS",
    value: PerformCommand.elprs,
  },
  [PerformCommand.smokeOnOff]: {
    label: "Smoke On/Off",
    value: PerformCommand.smokeOnOff,
  },
};
