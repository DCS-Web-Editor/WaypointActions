import { options } from "./actions";
import { findById } from "./utils";

export function setFormation(value: number) {
  const parent = findById(options[5].options as any[], value);
  const form = {
    formationIndex: parent.parent.key as number,
    name: 5,
    value,
    variantIndex: parent.item.key as number,
  };
  return form;
}
