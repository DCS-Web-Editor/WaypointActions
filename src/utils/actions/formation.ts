import type { TreeSelectOption } from "naive-ui";
import { Formation } from "../consts";
import type { UnitType } from "../../types";

const RotaryWing: TreeSelectOption[] = [
  {
    label: "Wedge",
    value: Formation.heli_wedge,
    children: [
      {
        label: "Wedge 70",
        value: 524288,
      },
    ],
  },
  {
    label: "Column",
    value: Formation.heli_column,
    children: [
      {
        label: "Column 70",
        value: 720896,
      },
    ],
  },
  {
    label: "Echelon",
    value: Formation.heli_echelon,
    children: [
      {
        label: "Echelon Right 70",
        value: 589825,
      },
      {
        label: "Echelon Left 70",
        value: 590081,
      },
    ],
  },
  {
    label: "Front",
    value: Formation.heli_front,
    children: [
      {
        label: "Right Front 300",
        value: 655361,
      },
      {
        label: "Right Front 600",
        value: 655362,
      },
      {
        label: "Left Front 300",
        value: 655617,
      },
      {
        label: "Left Front 600",
        value: 655618,
      },
    ],
  },
];

const FixedWing: TreeSelectOption[] = [
  {
    label: "Line Abreast",
    value: Formation.line_abreast,
    children: [
      {
        label: "Line Abreast Close",
        value: 65537,
      },
      {
        label: "Line Abreast Open",
        value: 65538,
      },
      {
        label: "Line Abreast Group Close",
        value: 65539,
      },
    ],
  },
  {
    label: "Trail",
    value: Formation.trail,
    children: [
      {
        label: "Trail Close",
        value: 131073,
      },
      {
        label: "Trail Open",
        value: 131074,
      },
      {
        label: "Trail Group Close",
        value: 131075,
      },
    ],
  },
  {
    label: "Wedge",
    value: Formation.wedge,
    children: [
      {
        label: "Wedge Close",
        value: 196609,
      },
      {
        label: "Wedge Open",
        value: 196610,
      },
      {
        label: "Wedge Group Close",
        value: 196611,
      },
    ],
  },
  {
    label: "Echelon Right",
    value: Formation.echelon_right,
    children: [
      {
        label: "Echelon Right Close",
        value: 262145,
      },
      {
        label: "Echelon Right Open",
        value: 262146,
      },
      {
        label: "Echelon Right Group Close",
        value: 262147,
      },
    ],
  },
  {
    label: "Echelon",
    value: Formation.echelon_left,
    children: [
      {
        label: "Echelon Left Close",
        value: 327681,
      },
      {
        label: "Echelon Left Open",
        value: 327682,
      },
      {
        label: "Echelon Left Group Close",
        value: 327683,
      },
    ],
  },
  {
    label: "Finger Four",
    value: Formation.finger_four,
    children: [
      {
        label: "Finger Four Close",
        value: 393217,
      },
      {
        label: "Finger Four Open",
        value: 393218,
      },
      {
        label: "Finger Four Group Close",
        value: 393219,
      },
    ],
  },
  {
    label: "Spread Four",
    value: Formation.spread_four,
    children: [
      {
        label: "Spread Four Close",
        value: 458753,
      },
      {
        label: "Spread Four Open",
        value: 458754,
      },
      {
        label: "Spread Four Group Close",
        value: 458755,
      },
    ],
  },
  {
    label: "WW2 - Bomber Element",
    value: Formation.ww2_bomber_element,
    children: [
      {
        label: "WW2 - Bomber Element Close",
        value: 786433,
      },
      {
        label: "WW2 - Bomber Element Open",
        value: 786434,
      },
      {
        label: "WW2 - Bomber Element Group Close",
        value: 786435,
      },
    ],
  },
  {
    label: "WW2 - Bomber Element Height",
    value: Formation.ww2_bomber_element_height,
    children: [
      {
        label: "WW2 - Bomber Element Height Close",
        value: 851969,
      },
    ],
  },
  {
    label: "WW2 - Fighter Vic",
    value: Formation.ww2_fighter_vic,
    children: [
      {
        label: "WW2 - Fighter Vic Close",
        value: 917505,
      },
      {
        label: "WW2 - Fighter Vic Open",
        value: 917506,
      },
    ],
  },
  {
    label: "Modern - Bomber Element",
    value: Formation.modern_bomber_element,
    children: [
      {
        label: "Modern - Bomber Element Close",
        value: 1114113,
      },
      {
        label: "Modern - Bomber Element Open",
        value: 1114114,
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
