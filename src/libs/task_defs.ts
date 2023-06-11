import type { TreeSelectOption, SelectOption } from "naive-ui";
import { UnitOptions } from "./utils";
import type { Checkbox } from "./Tasks";

export const DropDownDefs: Record<number, SelectOption> = {
  1: {
    label: "ROE",
    value: 1,
    options: [
      {
        label: "WEAPON FREE",
        value: 1,
      },
      {
        label: "PRIORITY DESIGNATED",
        value: 2,
      },
      {
        label: "ONLY DESIGNATED",
        value: 3,
      },
      {
        label: "RETURN FIRE",
        value: 4,
      },
      {
        label: "WEAPON HOLD",
        value: 5,
      },
    ],
  },
  2: {
    label: "Reaction To Threat",
    value: 2,
    options: [
      {
        label: "NO REACTION",
        value: 1,
      },
      {
        label: "PASSIVE DEFENCE",
        value: 2,
      },
      {
        label: "EVADE FIRE",
        value: 3,
      },
      {
        label: "EVASIVE VERTICAL MANOEUVER",
        value: 4,
      },
      {
        label: "ALLOW ABORT MISSION",
        value: 5,
      },
      {
        label: "HORIZONTAL AAA FIRE EVADE",
        value: 6,
      },
    ],
  },
  3: {
    label: "Radar Using",
    value: 3,
    options: [
      {
        label: "NEVER USE",
        value: 1,
      },
      {
        label: "USE FOR ATTACK ONLY",
        value: 2,
      },
      {
        label: "USE FOR SEARCH IF REQUIRED",
        value: 3,
      },
      {
        label: "USE FOR CONTINUOUS SEARCH",
        value: 4,
      },
    ],
  },
  4: {
    label: "Chaff - Flare Using",
    value: 4,
    options: [
      {
        label: "NEVER USE",
        value: 1,
      },
      {
        label: "USE AGAINST FIRED MISSILE",
        value: 2,
      },
      {
        label: "USE WHEN FLYING IN SAM WEZ",
        value: 3,
      },
      {
        label: "USE WHEN FLYING NEAR ENEMIES (N/A)",
        value: 4,
      },
    ],
  },
  7: {
    label: "RTB on out of ammo",
    value: 7,
    options: [
      {
        label: "No weapon",
        value: 0,
      },
      {
        label: "All",
        value: 4294967295,
      },
      {
        label: "Unguided",
        value: 805339120,
      },
      {
        label: "-Cannons",
        value: 805306368,
      },
      {
        label: "-Rockets",
        value: 30720,
      },
      {
        label: "--Light Rockets",
        value: 2048,
      },
      {
        label: "--Heavy Rockets",
        value: 16384,
      },
      {
        label: "-Bombs",
        value: 2032,
      },
      {
        label: "--Iron Bombs",
        value: 240,
      },
      {
        label: "--Cluster Bombs",
        value: 768,
      },
      {
        label: "--Candle Bombs",
        value: 1024,
      },
      {
        label: "-Torpedoes",
        value: 4294967296,
      },
      {
        label: "Guided",
        value: 268402702,
      },
      {
        label: "-Guided Bombs",
        value: 14,
      },
      {
        label: "-Missiles",
        value: 268402688,
      },
      {
        label: "-ASM",
        value: 4161536,
      },
      {
        label: "--ATGM",
        value: 131072,
      },
      {
        label: "--Standard ASM",
        value: 1835008,
      },
      {
        label: "--ARM",
        value: 32768,
      },
      {
        label: "--Antiship Missiles",
        value: 65536,
      },
      {
        label: "--Cruise Missiles",
        value: 2097152,
      },
      {
        label: "-AAM",
        value: 264241152,
      },
      {
        label: "--SR AAM",
        value: 4194304,
      },
      {
        label: "--MR AAM",
        value: 8388608,
      },
      {
        label: "--LR AAM",
        value: 16777216,
      },
    ],
  },
  9: {
    label: "ECM Using",
    value: 9,
    options: [
      {
        label: "NEVER USE",
        value: 1,
      },
      {
        label: "USE IF ONLY LOCKED BY RADAR",
        value: 2,
      },
      {
        label: "USE IF DETECTED OR LOCKED BY RADAR",
        value: 3,
      },
      {
        label: "ALWAYS USE",
        value: 4,
      },
    ],
  },
  14: {
    label: "AA Missile Attack Ranges",
    value: 14,
    options: [
      {
        label: "MAX RANGE LAUNCH",
        value: 1,
      },
      {
        label: "NO ESCAPE ZONE LAUNCH",
        value: 2,
      },
      {
        label: "HALF WAY MAX RANGE - NO ESCAPE ZONE LAUNCH",
        value: 3,
      },
      {
        label: "LAUNCH BY TARGET THREAT ESTIMATE",
        value: 4,
      },
      {
        label: "RANDOM BETWEEN MAX RANGE AND NO ESCAPE ZONE LAUNCH",
        value: 5,
      },
    ],
  },
};

export const TreeSelectDefsRecord: Record<number, TreeSelectOption> = {
  5: {
    label: "Formation",
    value: 5,
    options: [
      {
        label: "Line Abreast",
        value: 1,
        children: [
          { label: "Close (1828m x 0m)", value: 1 },
          { label: "Open (2743m x 0m)", value: 2 },
          { label: "Group Close (39m x 0m)", value: 3 },
        ],
      },
      {
        label: "Trail",
        value: 2,
        children: [
          { label: "Close (0m x 1389m)", value: 1 },
          { label: "Open (0m x 2778m)", value: 2 },
          { label: "Group Close (0m x 100m)", value: 3 },
        ],
      },
      {
        label: "Wedge",
        value: 3,
        children: [
          { label: "Close (527m x 304m)", value: 1 },
          { label: "Open (1055m x 609m)", value: 2 },
          { label: "Group Close (39m x 36m)", value: 3 },
        ],
      },
      {
        label: "Echelon Right",
        value: 4,
        children: [
          { label: "Close (527m x 304m)", value: 1 },
          { label: "Open (1055m x 609m)", value: 2 },
          { label: "Group Close (39m x 36m)", value: 3 },
        ],
      },
      {
        label: "Echelon Left",
        value: 5,
        children: [
          { label: "Close (527m x 304m)", value: 1 },
          { label: "Open (1055m x 609m)", value: 2 },
          { label: "Group Close (39m x 36m)", value: 3 },
        ],
      },
      {
        label: "Finger Four",
        value: 6,
        children: [
          { label: "Close (58m x 48m)", value: 1 },
          { label: "Open (116m x 97m)", value: 2 },
          { label: "Group Close 50m x 50m)", value: 3 },
        ],
      },
      {
        label: "Spread Four",
        value: 7,
        children: [
          { label: "Close (58m x 48m)", value: 1 },
          { label: "Open (116m x 97m)", value: 2 },
          { label: "Group Close (50m x 50m)", value: 3 },
        ],
      },
      {
        label: "WW2: Bomber Element",
        value: 12,
        children: [
          { label: "Close (45m x 30m)", value: 1 },
          { label: "Open (90m x 60m)", value: 2 },
        ],
      },
      {
        label: "WW2: Bomber Element Height Separation",
        value: 13,
        children: [],
      },
      {
        label: "WW2: Fighter Vic",
        value: 14,
        children: [
          { label: "Close (30m x 30m)", value: 1 },
          { label: "Open (60m x 60m)", value: 2 },
        ],
      },
      {
        label: "Modern Bomber Element",
        value: 17,
        children: [
          { label: "Close (100m x 100m)", value: 1 },
          { label: "Open (200m x 200m)", value: 2 },
        ],
      },
    ],
  },
  16: {
    label: "Radio Usage when Contact",
    value: 16,
    options: UnitOptions,
  },
  17: {
    label: "Radio Usage when Engage",
    value: 17,
    options: UnitOptions,
  },
  18: {
    label: "Radio Usage when Kill Target",
    value: 18,
    options: UnitOptions,
  },
};

export const optionDefs: Record<number, Checkbox> = {
  6: {
    label: "RTB on Bingo Fuel",
    value: 6,
    enabled: false,
  },
  8: {
    label: "Silence",
    value: 8,
    enabled: false,
  },
  10: {
    label: "Restrict Air-to-Air Attack",
    value: 10,
    enabled: false,
  },
  11: {
    label: "Restrict Jettision",
    value: 11,
    enabled: false,
  },
  12: {
    label: "Restrict Afterburner",
    value: 12,
    enabled: false,
  },
  13: {
    label: "Restrict Air-to-Ground Attack",
    value: 13,
    enabled: false,
  },
  15: {
    label: "No Report Waypoint Pass",
    value: 15,
    enabled: false,
  },
  19: {
    label: "Jettison fuel tanks when empty",
    value: 19,
    enabled: false,
  },
  20: {
    label: "Override AI attack avoidance decisions",
    value: 20,
    enabled: false,
  },
};
