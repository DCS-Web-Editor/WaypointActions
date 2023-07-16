import { Task, type TTask } from "../consts";
import type { TConstsList } from "../../types";

export const performTask: Record<string, TConstsList<TTask>> = {
  [Task.noTask]: {
    label: "No Task",
    value: Task.noTask,
    params: {},
  },
  [Task.attackGroup]: {
    label: "Attack Group",
    value: Task.attackGroup,
    params: {
      groupId: null,
      weaponType: null,
      groupAttack: false,
      attackQtyLimit: false,
      attackQty: 1,
    },
  },
  [Task.attackUnit]: {
    label: "Attack Unit",
    value: Task.attackUnit,
    params: {
      groupId: null,
      weaponType: null,
      groupAttack: false,
      attackQtyLimit: false,
      attackQty: 1,
    },
  },
  [Task.attackMapObject]: {
    label: "Attack Map Object",
    value: Task.attackMapObject,
    params: {
      weaponType: null,
      groupAttack: false,
      attackQtyLimit: false,
      attackQty: 1,
    },
  },
  [Task.bombing]: {
    label: "Bombing",
    value: Task.bombing,
    params: {
      weaponType: null,
      groupAttack: false,
      attackQtyLimit: false,
      attackQty: 1,
      attackType: null,
    },
  },
  [Task.bombingRunway]: {
    label: "Bombing Runway",
    value: Task.bombingRunway,
    params: {
      weaponType: null,
      groupAttack: false,
      attackQtyLimit: false,
      attackQty: 1,
    },
  },
  [Task.cargoTransportation]: {
    label: "Cargo Transportation",
    value: Task.cargoTransportation,
    params: {
      groupId: null,
      zoneId: null,
    },
  },
  [Task.cargoTransportationPlane]: {
    label: "Cargo Transportation Plane",
    value: Task.cargoTransportationPlane,
    params: {
      groupId: null,
    },
  },
  [Task.cargoUnloadPlane]: {
    label: "Cargo Unload Plane",
    value: Task.cargoUnloadPlane,
    params: {
      groupId: null,
    },
  },
  [Task.orbit]: {
    label: "Orbit",
    value: Task.orbit,
    params: {
      pattern: null,
    },
  },
  [Task.land]: {
    label: "Land",
    value: Task.land,
    params: {
      durationFlag: false,
      duration: 5 * 60 + 0,
    },
  },
  [Task.refueling]: {
    label: "Refueling",
    value: Task.refueling,
    params: {},
  },
  [Task.facAttackGroup]: {
    label: "FAC Attack Group",
    value: Task.facAttackGroup,
    params: {
      groupId: null,
      weaponType: null,
    },
  },
  [Task.fireAtPoint]: {
    label: "Fire At Point",
    value: Task.fireAtPoint,
    params: {
      zoneRadius: 0,
      templateId: "",
      expendQtyEnabled: false,
      expendQty: 1,
      altitude: null,
      alt_type: 1,
    },
  },
  [Task.hold]: {
    label: "Hold",
    value: Task.hold,
    params: {
      templateId: "",
    },
  },
  [Task.follow]: {
    label: "Follow",
    value: Task.follow,
    params: {
      pos: {
        x: -500,
        y: 0,
        z: 200,
      },
      lastWptIndexFlag: true,
      lastWptIndexFlagChangedManually: true,
      lastWptIndex: null,
    },
  },
  [Task.escort]: {
    label: "Escort",
    value: Task.escort,
    params: {
      pos: {
        x: -500,
        y: 0,
        z: 200,
      },
      lastWptIndexFlag: true,
      lastWptIndexFlagChangedManually: true,
      lastWptIndex: null,
      engagementDistMax: 60000,
      targetTypes: ["Planes"],
    },
  },
  [Task.embarkToTransport]: {
    label: "Embark To Transport",
    value: Task.embarkToTransport,
    params: {
      zoneRadius: 200,
    },
  },
  [Task.goToWaypoint]: {
    label: "Go To Waypoint",
    value: Task.goToWaypoint,
    params: {},
  },
  [Task.embarking]: {
    label: "Embarking",
    value: Task.embarking,
    params: {
      durationFlag: false,
      distributionFlag: false,
      duration: 300,
      groupsForEmbarking: [],
      distribution: {},
      onStartMission: false,
    },
  },
  [Task.disembarking]: {
    label: "Disembarking",
    value: Task.disembarking,
    params: {
      x: 0,
      y: 0,
      groupsForEmbarking: {},
    },
  },
  [Task.attachTrailer]: {
    label: "Attach Trailer",
    value: Task.attachTrailer,
    params: {
      onStartMission: false,
    },
  },
  [Task.detachTrailer]: {
    label: "Detach Trailer",
    value: Task.detachTrailer,
    params: {
      x: 0,
      y: 0,
    },
  },
  [Task.aerobatics]: {
    label: "Aerobatics",
    value: Task.aerobatics,
    params: {},
  },
  [Task.carpetBombing]: {
    label: "Carpet Bombing",
    value: Task.carpetBombing,
    params: {
      weaponType: "weaponTable.ironBombs",
      groupAttack: false,
      attackQtyLimit: false,
      attackQty: 1,
      carpetLength: 500.0,
      attackType: "Carpet",
    },
  },
  [Task.followBigFormation]: {
    label: "Follow Big Formation",
    value: Task.followBigFormation,
    params: {
      pos: {
        x: -150,
        y: 0,
        z: 150,
      },
      lastWptIndexFlag: true,
      lastWptIndexFlagChangedManually: true,
      lastWptIndex: null,
      formationType: 0,
      posInBox: 1,
      posInGroup: 1,
      posInWing: 1,
    },
  },
  [Task.groundEscort]: {
    label: "Ground Escort",
    value: Task.groundEscort,
    params: {
      lastWptIndexFlag: true,
      lastWptIndexFlagChangedManually: true,
      lastWptIndex: null,
      engagementDistMax: 500,
      targetTypes: ["Helicopters", "Ground Units"],
    },
  },
  [Task.paratroopersDrop]: {
    label: "Paratroopers Drop",
    value: Task.paratroopersDrop,
    params: {
      groupAttack: false,
      attackQtyLimit: false,
      attackQty: 1,
      carpetLength: 500.0,
      attackType: "Carpet",
      scriptFileName: "",
      groupsOnBoard: [],
    },
  },
  [Task.shipHoldPoint]: {
    label: "Ship Hold Point",
    value: Task.shipHoldPoint,
    params: {},
  },
  [Task.recoveryTanker]: {
    label: "Recovery Tanker",
    value: Task.recoveryTanker,
    params: {
      lastWptIndexFlag: true,
      lastWptIndexFlagChangedManually: true,
      lastWptIndex: null,
      targetTypes: ["Ships"],
    },
  },
};
