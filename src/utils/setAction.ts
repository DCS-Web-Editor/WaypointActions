import { findByIdKey } from "./utils";

export function setFormation(value: number, options: any[]) {
  const parent = findByIdKey(options, value);
  console.log(parent);
  const form = {
    formationIndex: parent.parent.key as number,
    name: 5,
    value,
    variantIndex: parent.parent.children.indexOf(parent.item),
  };
  return form;
}
