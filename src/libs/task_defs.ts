import type { TreeSelectOption, SelectOption } from "naive-ui";
import type { Checkbox } from "./Tasks";

export const optionDefs = [
  {
    label: "No Option",
    val: false,
    value: 0,
  },
  {
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
    ] as SelectOption[],
  },
  {
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
    ] as SelectOption[],
  },
  {
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
    ] as SelectOption[],
  },
  {
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
    ] as SelectOption[],
  },
  {
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
        value: 15,
        children: [
          { label: "Close (100m x 100m)", value: 1 },
          { label: "Open (200m x 200m)", value: 2 },
        ],
      },
    ] as SelectOption[],
  },
  {
    label: "RTB on Bingo Fuel",
    value: 6,
    val: false,
  } satisfies Checkbox,
  {
    label: "RTB on out of ammo",
    value: 7,
    options: [
      "No weapon",
      "All",
      "Unguided",
      "-Cannons",
      "-Rockets",
      "--Light Rockets",
      "--Heavy Rockets",
      "-Bombs",
      "--Iron Bombs",
      "--Cluster Bombs",
      "--Candle Bombs",
      "-Torpedoes",
      "Guided",
      "-Guided Bombs",
      "-Missiles",
      "-ASM",
      "--ATGM",
      "--Standard ASM",
      "--ARM",
      "--Antiship Missiles",
      "--Cruise Missiles",
      "-AAM",
      "--SR AAM",
      "--MR AAM",
      "--LR AAM",
    ],
  },
  {
    label: "Silence",
    value: 8,
    val: false,
  } satisfies Checkbox,
  {
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
    ] as SelectOption[],
  },
  {
    label: "Restrict Air-to-Air Attack",
    value: 10,
    val: false,
  } satisfies Checkbox,
  {
    label: "Restrict Jettision",
    value: 11,
    val: false,
  } satisfies Checkbox,
  {
    label: "Restrict Afterburner",
    value: 12,
    val: false,
  } satisfies Checkbox,
  {
    label: "Restrict Air-to-Ground Attack",
    value: 13,
    val: false,
  } satisfies Checkbox,
  {
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
    ] as SelectOption[],
  },
  {
    label: "No Report Waypoint Pass",
    value: 15,
    val: false,
  } satisfies Checkbox,
  {
    label: "Radio Usage when Contact",
    value: 16,
    options: [
      {
        label: "All",
        children: [
          {
            label: "Air",
            children: [
              {
                label: "Airplanes",
                children: [
                  {
                    label: "Fighters",
                    key: "Fighters",
                  },
                  {
                    label: "Multirole fighters",
                    key: "Multirole fighters",
                  },
                  {
                    label: "Bombers",
                    key: "Bombers",
                  },
                ],
              },
              {
                label: "Helicopters",
                key: "Helicopters",
              },
              {
                label: "UAVs",
                key: "UAVs",
              },
            ],
          },
          {
            label: "Ground",
            children: [
              {
                label: "Infantry",
                key: "Infantry",
              },
              {
                label: "Fortifications",
                key: "Fortifications",
              },
              {
                label: "Vehicles",
                children: [
                  {
                    label: "Armor",
                    children: [
                      {
                        label: "Tanks",
                        key: "Tanks",
                      },
                      {
                        label: "IFV",
                        key: "IFV",
                      },
                      {
                        label: "APC",
                        key: "APC",
                      },
                    ],
                  },
                  {
                    label: "Artillery",
                    key: "Artillery",
                  },
                  {
                    label: "Unarmed vehicles",
                    key: "Unarmed vehicles",
                  },
                ],
              },
              {
                label: "Air Defence",
                children: [
                  {
                    label: "AAA",
                    key: "AAA",
                  },
                  {
                    label: "SAM",
                    children: [
                      {
                        label: "SR SAM",
                        key: "SR SAM",
                      },
                      {
                        label: "MR SAM",
                        key: "MR SAM",
                      },
                      {
                        label: "LR SAM",
                        key: "LR SAM",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "Naval",
            children: [
              {
                label: "Ships",
                children: [
                  {
                    label: "Armed ships",
                    children: [
                      {
                        label: "Aircraft Carriers",
                        key: "Aircraft Carriers",
                      },
                      {
                        label: "Cruisers",
                        key: "Cruisers",
                      },
                      {
                        label: "Destroyers",
                        key: "Destroyers",
                      },
                      {
                        label: "Frigates",
                        key: "Frigates",
                      },
                      {
                        label: "Corvettes",
                        key: "Corvettes",
                      },
                      {
                        label: "Light armed ships",
                        key: "Light armed ships",
                      },
                    ],
                  },
                  {
                    label: "Unarmed ships",
                    key: "Unarmed ships",
                  },
                ],
              },
              {
                label: "Submarines",
                key: "Submarines",
              },
            ],
          },
          {
            label: "Missiles",
            children: [
              {
                label: "Cruise missiles",
                key: "Cruise missiles",
              },
              {
                label: "Antiship Missiles",
                key: "Antiship Missiles",
              },
              {
                label: "AA Missiles",
                key: "AA Missiles",
              },
              {
                label: "AG Missiles",
                key: "AG Missiles",
              },
              {
                label: "SA Missiles",
                key: "SA Missiles",
              },
            ],
          },
        ],
      },
    ] as TreeSelectOption[],
  },
  {
    label: "Radio Usage when Engage",
    value: 17,
    options: [
      {
        label: "All",
        children: [
          {
            label: "Air",
            children: [
              {
                label: "Airplanes",
                children: [
                  {
                    label: "Fighters",
                    key: "Fighters",
                  },
                  {
                    label: "Multirole fighters",
                    key: "Multirole fighters",
                  },
                  {
                    label: "Bombers",
                    key: "Bombers",
                  },
                ],
              },
              {
                label: "Helicopters",
                key: "Helicopters",
              },
              {
                label: "UAVs",
                key: "UAVs",
              },
            ],
          },
          {
            label: "Ground",
            children: [
              {
                label: "Infantry",
                key: "Infantry",
              },
              {
                label: "Fortifications",
                key: "Fortifications",
              },
              {
                label: "Vehicles",
                children: [
                  {
                    label: "Armor",
                    children: [
                      {
                        label: "Tanks",
                        key: "Tanks",
                      },
                      {
                        label: "IFV",
                        key: "IFV",
                      },
                      {
                        label: "APC",
                        key: "APC",
                      },
                    ],
                  },
                  {
                    label: "Artillery",
                    key: "Artillery",
                  },
                  {
                    label: "Unarmed vehicles",
                    key: "Unarmed vehicles",
                  },
                ],
              },
              {
                label: "Air Defence",
                children: [
                  {
                    label: "AAA",
                    key: "AAA",
                  },
                  {
                    label: "SAM",
                    children: [
                      {
                        label: "SR SAM",
                        key: "SR SAM",
                      },
                      {
                        label: "MR SAM",
                        key: "MR SAM",
                      },
                      {
                        label: "LR SAM",
                        key: "LR SAM",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "Naval",
            children: [
              {
                label: "Ships",
                children: [
                  {
                    label: "Armed ships",
                    children: [
                      {
                        label: "Aircraft Carriers",
                        key: "Aircraft Carriers",
                      },
                      {
                        label: "Cruisers",
                        key: "Cruisers",
                      },
                      {
                        label: "Destroyers",
                        key: "Destroyers",
                      },
                      {
                        label: "Frigates",
                        key: "Frigates",
                      },
                      {
                        label: "Corvettes",
                        key: "Corvettes",
                      },
                      {
                        label: "Light armed ships",
                        key: "Light armed ships",
                      },
                    ],
                  },
                  {
                    label: "Unarmed ships",
                    key: "Unarmed ships",
                  },
                ],
              },
              {
                label: "Submarines",
                key: "Submarines",
              },
            ],
          },
          {
            label: "Missiles",
            children: [
              {
                label: "Cruise missiles",
                key: "Cruise missiles",
              },
              {
                label: "Antiship Missiles",
                key: "Antiship Missiles",
              },
              {
                label: "AA Missiles",
                key: "AA Missiles",
              },
              {
                label: "AG Missiles",
                key: "AG Missiles",
              },
              {
                label: "SA Missiles",
                key: "SA Missiles",
              },
            ],
          },
        ],
      },
    ] as TreeSelectOption[],
  },
  {
    label: "Radio Usage when Kill Target",
    value: 18,
    options: [
      {
        label: "All",
        children: [
          {
            label: "Air",
            children: [
              {
                label: "Airplanes",
                children: [
                  {
                    label: "Fighters",
                    key: "Fighters",
                  },
                  {
                    label: "Multirole fighters",
                    key: "Multirole fighters",
                  },
                  {
                    label: "Bombers",
                    key: "Bombers",
                  },
                ],
              },
              {
                label: "Helicopters",
                key: "Helicopters",
              },
              {
                label: "UAVs",
                key: "UAVs",
              },
            ],
          },
          {
            label: "Ground",
            children: [
              {
                label: "Infantry",
                key: "Infantry",
              },
              {
                label: "Fortifications",
                key: "Fortifications",
              },
              {
                label: "Vehicles",
                children: [
                  {
                    label: "Armor",
                    children: [
                      {
                        label: "Tanks",
                        key: "Tanks",
                      },
                      {
                        label: "IFV",
                        key: "IFV",
                      },
                      {
                        label: "APC",
                        key: "APC",
                      },
                    ],
                  },
                  {
                    label: "Artillery",
                    key: "Artillery",
                  },
                  {
                    label: "Unarmed vehicles",
                    key: "Unarmed vehicles",
                  },
                ],
              },
              {
                label: "Air Defence",
                children: [
                  {
                    label: "AAA",
                    key: "AAA",
                  },
                  {
                    label: "SAM",
                    children: [
                      {
                        label: "SR SAM",
                        key: "SR SAM",
                      },
                      {
                        label: "MR SAM",
                        key: "MR SAM",
                      },
                      {
                        label: "LR SAM",
                        key: "LR SAM",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "Naval",
            children: [
              {
                label: "Ships",
                children: [
                  {
                    label: "Armed ships",
                    children: [
                      {
                        label: "Aircraft Carriers",
                        key: "Aircraft Carriers",
                      },
                      {
                        label: "Cruisers",
                        key: "Cruisers",
                      },
                      {
                        label: "Destroyers",
                        key: "Destroyers",
                      },
                      {
                        label: "Frigates",
                        key: "Frigates",
                      },
                      {
                        label: "Corvettes",
                        key: "Corvettes",
                      },
                      {
                        label: "Light armed ships",
                        key: "Light armed ships",
                      },
                    ],
                  },
                  {
                    label: "Unarmed ships",
                    key: "Unarmed ships",
                  },
                ],
              },
              {
                label: "Submarines",
                key: "Submarines",
              },
            ],
          },
          {
            label: "Missiles",
            children: [
              {
                label: "Cruise missiles",
                key: "Cruise missiles",
              },
              {
                label: "Antiship Missiles",
                key: "Antiship Missiles",
              },
              {
                label: "AA Missiles",
                key: "AA Missiles",
              },
              {
                label: "AG Missiles",
                key: "AG Missiles",
              },
              {
                label: "SA Missiles",
                key: "SA Missiles",
              },
            ],
          },
        ],
      },
    ] as TreeSelectOption[],
  },
  {
    label: "Jettison fuel tanks when empty",
    value: 19,
    val: false,
  } satisfies Checkbox,
  {
    label: "Override AI attack avoidance decisions",
    value: 20,
    val: false,
  } satisfies Checkbox,
];
