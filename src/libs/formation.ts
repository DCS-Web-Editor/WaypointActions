interface TFixedWing {
  close: number;
  open: number | null;
  group_close: number | null;
}

interface THelicopter {
  70: number | null;
  300: number | null;
  600: number | null;
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

export const getFormation = (form: Formation, heloIndex?: 0 | 1): TFormation => {
  switch (form) {
    case Formation.line_abreast:
      return {
        close: 65537,
        open: 65538,
        group_close: 65539,
      } satisfies TFixedWing;
    case Formation.trail:
      return {
        close: 131073,
        open: 131074,
        group_close: 131075,
      } satisfies TFixedWing;
    case Formation.wedge:
      return {
        close: 196609,
        open: 196610,
        group_close: 196611,
      } satisfies TFixedWing;
    case Formation.echelon_right:
      return {
        close: 262145,
        open: 262146,
        group_close: 262147,
      } satisfies TFixedWing;
    case Formation.echelon_left:
      return {
        close: 327681,
        open: 327682,
        group_close: 327683,
      } satisfies TFixedWing;
    case Formation.finger_four:
      return {
        close: 393217,
        open: 393218,
        group_close: 393219,
      } satisfies TFixedWing;
    case Formation.spread_four:
      return {
        close: 458753,
        open: 458754,
        group_close: 458755,
      } satisfies TFixedWing;
    case Formation.heli_wedge:
      return { 70: 524288, 300: null, 600: null } satisfies THelicopter;
    case Formation.heli_column:
      return { 70: 720896, 300: null, 600: null } satisfies THelicopter;
    case Formation.heli_echelon:
      if (heloIndex === 0) {
        return { 70: 589825, 300: 589826, 600: 589827 } satisfies THelicopter;
      } else if (heloIndex === 1) {
        return { 70: 590081, 300: 590082, 600: 590083 } satisfies THelicopter;
      } else {
        return { 70: null, 300: null, 600: null } satisfies THelicopter;
      }
    case Formation.heli_front:
      if (heloIndex === 0) {
        return { 70: null, 300: 655361, 600: 655362 } satisfies THelicopter;
      } else if (heloIndex === 1) {
        return { 70: null, 300: 655617, 600: 655618 } satisfies THelicopter;
      } else {
        return { 70: null, 300: null, 600: null } satisfies THelicopter;
      }
    case Formation.ww2_bomber_element:
      return {
        close: 786433,
        open: 786434,
        group_close: 786435,
      } satisfies TFixedWing;
    case Formation.ww2_bomber_element_height:
      return {
        close: 851969,
        open: null,
        group_close: null,
      } satisfies TFixedWing;
    case Formation.ww2_fighter_vic:
      return {
        close: 917505,
        open: 917506,
        group_close: null,
      } satisfies TFixedWing;
    case Formation.modern_bomber_element:
      return {
        close: 1114113,
        open: 1114114,
        group_close: null,
      } satisfies TFixedWing;
  }
};
