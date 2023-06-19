import { Task } from "./enums";
import type { EnumList } from "../types";

export const performTask: Record<string, EnumList<Task>> = {
  [Task.noTask]: {
    label: "No Task",
    value: Task.noTask,
  },
  [Task.attackGroup]: {
    label: "Attack Group",
    value: Task.attackGroup,
  },
  [Task.attackUnit]: {
    label: "Attack Unit",
    value: Task.attackUnit,
  },
  [Task.attackMapObject]: {
    label: "Attack Map Object",
    value: Task.attackMapObject,
  },
  [Task.bombing]: {
    label: "Bombing",
    value: Task.bombing,
  },
  [Task.bombingRunway]: {
    label: "Bombing Runway",
    value: Task.bombingRunway,
  },
  [Task.cargoTransportation]: {
    label: "Cargo Transportation",
    value: Task.cargoTransportation,
  },
  [Task.cargoTransportationPlane]: {
    label: "Cargo Transportation Plane",
    value: Task.cargoTransportationPlane,
  },
  [Task.cargoUnloadPlane]: {
    label: "Cargo Unload Plane",
    value: Task.cargoUnloadPlane,
  },
  [Task.orbit]: {
    label: "Orbit",
    value: Task.orbit,
  },
  [Task.land]: {
    label: "Land",
    value: Task.land,
  },
  [Task.refueling]: {
    label: "Refueling",
    value: Task.refueling,
  },
  [Task.facAttackGroup]: {
    label: "FAC Attack Group",
    value: Task.facAttackGroup,
  },
  [Task.fireAtPoint]: {
    label: "Fire At Point",
    value: Task.fireAtPoint,
  },
  [Task.hold]: {
    label: "Hold",
    value: Task.hold,
  },
  [Task.follow]: {
    label: "Follow",
    value: Task.follow,
  },
  [Task.escort]: {
    label: "Escort",
    value: Task.escort,
  },
  [Task.embarkToTransport]: {
    label: "Embark To Transport",
    value: Task.embarkToTransport,
  },
  [Task.goToWaypoint]: {
    label: "Go To Waypoint",
    value: Task.goToWaypoint,
  },
  [Task.embarking]: {
    label: "Embarking",
    value: Task.embarking,
  },
  [Task.disembarking]: {
    label: "Disembarking",
    value: Task.disembarking,
  },
  [Task.attachTrailer]: {
    label: "Attach Trailer",
    value: Task.attachTrailer,
  },
  [Task.detachTrailer]: {
    label: "Detach Trailer",
    value: Task.detachTrailer,
  },
  [Task.aerobatics]: {
    label: "Aerobatics",
    value: Task.aerobatics,
  },
  [Task.carpetBombing]: {
    label: "Carpet Bombing",
    value: Task.carpetBombing,
  },
  [Task.followBigFormation]: {
    label: "Follow Big Formation",
    value: Task.followBigFormation,
  },
  [Task.groundEscort]: {
    label: "Ground Escort",
    value: Task.groundEscort,
  },
  [Task.paratroopersDrop]: {
    label: "Paratroopers Drop",
    value: Task.paratroopersDrop,
  },
  [Task.shipHoldPoint]: {
    label: "Ship Hold Point",
    value: Task.shipHoldPoint,
  },
  [Task.recoveryTanker]: {
    label: "Recovery Tanker",
    value: Task.recoveryTanker,
  },
};
