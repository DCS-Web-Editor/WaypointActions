import type { TreeSelectOption } from "naive-ui";
import { Formation } from "../enums";
import type { UnitType } from "../../types";

const RotaryWing: TreeSelectOption[] = [
  {
    label: "Helicopter - Wedge",
    key: Formation.heli_wedge,
    children: [
      {
        label: "Helicopter - Wedge 70",
        key: 524288,
      },
    ],
  },
  {
    label: "Helicopter - Column",
    key: Formation.heli_column,
    children: [
      {
        label: "Helicopter - Column 70",
        key: 720896,
      },
    ],
  },
  {
    label: "Helicopter - Echelon",
    key: Formation.heli_echelon,
    children: [
      {
        label: "Helicopter - Echelon Right 70",
        key: 589825,
      },
      {
        label: "Helicopter - Echelon Left 70",
        key: 590081,
      },
    ],
  },
  {
    label: "Helicopter - Front",
    key: Formation.heli_front,
    children: [
      {
        label: "Helicopter - Right Front 300",
        key: 655361,
      },
      {
        label: "Helicopter - Right Front 600",
        key: 655362,
      },
      {
        label: "Helicopter - Left Front 300",
        key: 655617,
      },
      {
        label: "Helicopter - Left Front 600",
        key: 655618,
      },
    ],
  },
];

const FixedWing: TreeSelectOption[] = [
  {
    label: "Fixed Wing - Line Abreast",
    key: Formation.line_abreast,
    children: [
      {
        label: "Fixed Wing - Line Abreast Close",
        key: 65537,
      },
      {
        label: "Fixed Wing - Line Abreast Open",
        key: 65538,
      },
      {
        label: "Fixed Wing - Line Abreast Group Close",
        key: 65539,
      },
    ],
  },
  {
    label: "Fixed Wing - Trail",
    key: Formation.trail,
    children: [
      {
        label: "Fixed Wing - Trail Close",
        key: 131073,
      },
      {
        label: "Fixed Wing - Trail Open",
        key: 131074,
      },
      {
        label: "Fixed Wing - Trail Group Close",
        key: 131075,
      },
    ],
  },
  {
    label: "Fixed Wing - Wedge",
    key: Formation.wedge,
    children: [
      {
        label: "Fixed Wing - Wedge Close",
        key: 196609,
      },
      {
        label: "Fixed Wing - Wedge Open",
        key: 196610,
      },
      {
        label: "Fixed Wing - Wedge Group Close",
        key: 196611,
      },
    ],
  },
  {
    label: "Fixed Wing - Echelon Right",
    key: Formation.echelon_right,
    children: [
      {
        label: "Fixed Wing - Echelon Right Close",
        key: 262145,
      },
      {
        label: "Fixed Wing - Echelon Right Open",
        key: 262146,
      },
      {
        label: "Fixed Wing - Echelon Right Group Close",
        key: 262147,
      },
    ],
  },
  {
    label: "Fixed Wing - Echelon",
    key: Formation.echelon_left,
    children: [
      {
        label: "Fixed Wing - Echelon Left Close",
        key: 327681,
      },
      {
        label: "Fixed Wing - Echelon Left Open",
        key: 327682,
      },
      {
        label: "Fixed Wing - Echelon Left Group Close",
        key: 327683,
      },
    ],
  },
  {
    label: "Fixed Wing - Finger Four",
    key: Formation.finger_four,
    children: [
      {
        label: "Fixed Wing - Finger Four Close",
        key: 393217,
      },
      {
        label: "Fixed Wing - Finger Four Open",
        key: 393218,
      },
      {
        label: "Fixed Wing - Finger Four Group Close",
        key: 393219,
      },
    ],
  },
  {
    label: "Fixed Wing - Spread Four",
    key: Formation.spread_four,
    children: [
      {
        label: "Fixed Wing - Spread Four Close",
        key: 458753,
      },
      {
        label: "Fixed Wing - Spread Four Open",
        key: 458754,
      },
      {
        label: "Fixed Wing - Spread Four Group Close",
        key: 458755,
      },
    ],
  },
  {
    label: "Fixed Wing WW2 - Bomber Element",
    key: Formation.ww2_bomber_element,
    children: [
      {
        label: "Fixed Wing WW2 - Bomber Element Close",
        key: 786433,
      },
      {
        label: "Fixed Wing WW2 - Bomber Element Open",
        key: 786434,
      },
      {
        label: "Fixed Wing WW2 - Bomber Element Group Close",
        key: 786435,
      },
    ],
  },
  {
    label: "Fixed Wing WW2 - Bomber Element Height",
    key: Formation.ww2_bomber_element_height,
    children: [
      {
        label: "Fixed Wing WW2 - Bomber Element Height Close",
        key: 851969,
      },
    ],
  },
  {
    label: "Fixed Wing WW2 - Fighter Vic",
    key: Formation.ww2_fighter_vic,
    children: [
      {
        label: "Fixed Wing WW2 - Fighter Vic Close",
        key: 917505,
      },
      {
        label: "Fixed Wing WW2 - Fighter Vic Open",
        key: 917506,
      },
    ],
  },
  {
    label: "Fixed Wing Modern - Bomber Element",
    key: Formation.modern_bomber_element,
    children: [
      {
        label: "Fixed Wing Modern - Bomber Element Close",
        key: 1114113,
      },
      {
        label: "Fixed Wing Modern - Bomber Element Open",
        key: 1114114,
      },
    ],
  },
];

export const getFormation = (unitType: Exclude<UnitType, "ship" | "vehicle">) => {
  if (unitType === "helicopter") {
    return RotaryWing;
  }
  return FixedWing;
};
