/** @deprecated Will be transfered to a naive-ui dropdown component */

interface TFixedWing {
  close: {
    label: string;
    value: number;
  };
  open: {
    label: string;
    value: number;
  } | null;
  group_close: {
    label: string;
    value: number;
  } | null;
}

interface THelicopter {
  70: {
    label: string;
    value: number;
  } | null;
  300: {
    label: string;
    value: number;
  } | null;
  600: {
    label: string;
    value: number;
  } | null;
}

type TFormation = TFixedWing | THelicopter;

enum Formation {
  line_abreast = 1,
  trail = 2,
  wedge = 3,
  echelon_right = 4,
  echelon_left = 5,
  finger_four = 6,
  spread_four = 7,
  heli_wedge = 8,
  heli_echelon = 9,
  heli_front = 10,
  heli_column = 11,
  ww2_bomber_element = 12,
  ww2_bomber_element_height = 13,
  ww2_fighter_vic = 14,
  modern_bomber_element = 17,
}

export const useFormation = (form: Formation, heloIndex?: 0 | 1): TFormation => {
  if (heloIndex !== undefined) {
    switch (form) {
      case Formation.heli_wedge:
        return {
          70: { label: "Helicopter - Wedge 70", value: 524288 },
          300: null,
          600: null,
        } satisfies THelicopter;
      case Formation.heli_column:
        return {
          70: { label: "Helicopter - Column 70", value: 720896 },
          300: null,
          600: null,
        } satisfies THelicopter;
      case Formation.heli_echelon:
        if (heloIndex === 0) {
          return {
            70: { label: "Helicopter - Echelon Right 70", value: 589825 },
            300: null,
            600: null,
          } satisfies THelicopter;
        } else if (heloIndex === 1) {
          return {
            70: { label: "Helicopter - Echelon Left 70", value: 590081 },
            300: null,
            600: null,
          } satisfies THelicopter;
        } else {
          return { 70: null, 300: null, 600: null } satisfies THelicopter;
        }
      case Formation.heli_front:
        if (heloIndex === 0) {
          return {
            70: null,
            300: { label: "Helicopter - Front 300", value: 655361 },
            600: { label: "Helicopter - Front 600", value: 655362 },
          } satisfies THelicopter;
        } else if (heloIndex === 1) {
          return {
            70: null,
            300: { label: "Helicopter - Front 300", value: 655617 },
            600: { label: "Helicopter - Front 600", value: 655618 },
          } satisfies THelicopter;
        } else {
          return { 70: null, 300: null, 600: null } satisfies THelicopter;
        }
    }
  } else {
    switch (form) {
      case Formation.line_abreast:
        return {
          close: { label: "Line Abreast - Close", value: 65537 },
          open: { label: "Line Abreast - Open", value: 65538 },
          group_close: { label: "Line Abreast - Group Close", value: 65539 },
        } satisfies TFixedWing;
      case Formation.trail:
        return {
          close: { label: "Trail - Close", value: 131073 },
          open: { label: "Trail - Open", value: 131074 },
          group_close: { label: "Trail - Group Close", value: 131075 },
        } satisfies TFixedWing;
      case Formation.wedge:
        return {
          close: { label: "Wedge - Close", value: 196609 },
          open: { label: "Wedge - Open", value: 196610 },
          group_close: { label: "Wedge - Group Close", value: 196611 },
        } satisfies TFixedWing;
      case Formation.echelon_right:
        return {
          close: { label: "Echelon Right - Close", value: 262145 },
          open: { label: "Echelon Right - Open", value: 262146 },
          group_close: { label: "Echelon Right - Group Close", value: 262147 },
        } satisfies TFixedWing;
      case Formation.echelon_left:
        return {
          close: { label: "Echelon Left - Close", value: 327681 },
          open: { label: "Echelon Left - Open", value: 327682 },
          group_close: { label: "Echelon Left - Group Close", value: 327683 },
        } satisfies TFixedWing;
      case Formation.finger_four:
        return {
          close: { label: "Finger Four - Close", value: 393217 },
          open: { label: "Finger Four - Open", value: 393218 },
          group_close: { label: "Finger Four - Group Close", value: 393219 },
        } satisfies TFixedWing;
      case Formation.spread_four:
        return {
          close: { label: "Spread Four - Close", value: 458753 },
          open: { label: "Spread Four - Open", value: 458754 },
          group_close: { label: "Spread Four - Group Close", value: 458755 },
        } satisfies TFixedWing;
      case Formation.ww2_bomber_element:
        return {
          close: { label: "WW2 Bomber Element - Close", value: 786433 },
          open: { label: "WW2 Bomber Element - Open", value: 786434 },
          group_close: { label: "WW2 Bomber Element - Group Close", value: 786435 },
        } satisfies TFixedWing;
      case Formation.ww2_bomber_element_height:
        return {
          close: { label: "WW2 Bomber Element Height - Close", value: 851969 },
          open: null,
          group_close: null,
        } satisfies TFixedWing;
      case Formation.ww2_fighter_vic:
        return {
          close: { label: "WW2 Fighter Vic - Close", value: 917505 },
          open: { label: "WW2 Fighter Vic - Open", value: 917506 },
          group_close: null,
        } satisfies TFixedWing;
      case Formation.modern_bomber_element:
        return {
          close: { label: "Modern Bomber Element - Close", value: 1114113 },
          open: { label: "Modern Bomber Element - Open", value: 1114114 },
          group_close: null,
        } satisfies TFixedWing;
    }
  }
  return { 70: null, 300: null, 600: null } satisfies TFormation;
};
