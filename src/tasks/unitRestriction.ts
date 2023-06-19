import { Task } from "./enums";
import type { EnumList } from "../types";
import { performTask } from "./performTask";

type UnitRestriction = Record<string, Record<string, Record<string, Array<EnumList<Task>>>>>;

export const availableActions: UnitRestriction = {
  plane: {
    task: {
      default: [
        performTask[Task.noTask],
        performTask[Task.attackGroup],
        performTask[Task.attackUnit],
        performTask[Task.attackMapObject],
        performTask[Task.bombing],
        performTask[Task.bombingRunway],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.facAttackGroup],
        performTask[Task.follow],
        performTask[Task.aerobatics],
        performTask[Task.followBigFormation],
        performTask[Task.cargoTransportationPlane],
        performTask[Task.cargoUnloadPlane],
      ],
      nothing: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.aerobatics],
      ],
      airborne: [
        performTask[Task.noTask],
        performTask[Task.paratroopersDrop],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.followBigFormation],
      ],
      sead: [
        performTask[Task.noTask],
        performTask[Task.attackGroup],
        performTask[Task.attackUnit],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.escort],
      ],
      antiShipStrike: [
        performTask[Task.noTask],
        performTask[Task.attackGroup],
        performTask[Task.attackUnit],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
      ],
      awacs: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
      ],
      cas: [
        performTask[Task.noTask],
        performTask[Task.attackGroup],
        performTask[Task.attackUnit],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.aerobatics],
      ],
      cap: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.aerobatics],
      ],
      pinpointStrike: [
        performTask[Task.noTask],
        performTask[Task.attackMapObject],
        performTask[Task.bombing],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
      ],
      escort: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.escort],
      ],
      fighterSweep: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.aerobatics],
      ],
      gai: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
      ],
      groundAttack: [
        performTask[Task.noTask],
        performTask[Task.attackMapObject],
        performTask[Task.bombing],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.aerobatics],
        performTask[Task.carpetBombing],
        performTask[Task.followBigFormation],
      ],
      intercept: [
        performTask[Task.noTask],
        performTask[Task.attackGroup],
        performTask[Task.attackUnit],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.aerobatics],
      ],
      afac: [
        performTask[Task.noTask],
        performTask[Task.attackGroup],
        performTask[Task.attackUnit],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.facAttackGroup],
        performTask[Task.bombing],
        performTask[Task.attackMapObject],
        performTask[Task.follow],
      ],
      recon: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.aerobatics],
      ],
      refueling: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.recoveryTanker],
      ],
      runwayAttack: [
        performTask[Task.noTask],
        performTask[Task.attackMapObject],
        performTask[Task.bombing],
        performTask[Task.bombingRunway],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
      ],
      transport: [
        performTask[Task.noTask],
        performTask[Task.orbit],
        performTask[Task.refueling],
        performTask[Task.follow],
        performTask[Task.aerobatics],
        performTask[Task.followBigFormation],
        performTask[Task.cargoTransportationPlane],
        performTask[Task.cargoUnloadPlane],
      ],
    },
  },
};
