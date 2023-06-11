import checkbox_def from "./json/checkbox_def.json";
import dropdown_def from "./json/dropdown_def.json";
import treeselect_def from "./json/treeselect_def.json";
import type { TreeSelectOption, SelectOption } from "naive-ui";
import type { Checkbox } from "../types/Tasks";

export const dropdownDefs: Record<number, SelectOption> = dropdown_def;
export const treeselectDefs: Record<number, TreeSelectOption> = treeselect_def;
export const checkboxDefs: Record<number, Checkbox> = checkbox_def;
