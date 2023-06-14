import type { OptionList } from "../types/Tasks";
import { options } from "./options";
import { OptionName } from "./optionEnums";

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

/**
 * @todo: Add support for indexes 24, 27, 29 of OptionName enum
 */

export default function parseOption(id: number, value: number | boolean | string): OptionList {
  const option = options[id];
  if (typeof value === "number") {
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
  return {
    option: "",
    value: "",
  };
}
