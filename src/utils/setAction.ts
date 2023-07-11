import type { UnitType } from "../types";
import { getFormation } from "./actions/formation";
import { findByIdKey } from "./utils";

export const formOptions = (unitType: UnitType) => {
  if (unitType === "helicopter") {
    return getFormation(unitType);
  } else if (unitType === "plane") {
    return getFormation(unitType);
  } else {
    return [];
  }
};

export function setFormation(unitType: UnitType, value?: number) {
  const options = formOptions(unitType);
  if (value) {
    const parent = findByIdKey(options, value);
    return {
      formationIndex: parent.parent.value as number,
      name: 5,
      value,
      variantIndex: parent.parent.children.indexOf(parent.item),
    };
  } else {
    const parent = findByIdKey(options, options[0]?.children?.[0]?.value as number);
    return {
      formationIndex: parent.parent.value as number,
      name: 5,
      value: parent.item.value,
      variantIndex: parent.parent.children.indexOf(parent.item),
    };
  }
}
