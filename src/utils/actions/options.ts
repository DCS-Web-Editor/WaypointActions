import { OptionName, Formation } from "../enums";
import type { EnumList } from "../../types";

const treeSelect = [
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
];

const flagSelect = [
  {
    label: "On",
    value: true,
  },
  {
    label: "Off",
    value: false,
  },
];

/**
 * @description OptionName.roe[options] has 2 options, air and ground. Index of 0 is air (helo and fixed wing), index of 1 is for ground (vehicle and ship)
 * @description OptionName.alarmState[options] is only valid for vehicles and ships
 */

export const options: Record<number, EnumList<OptionName>> = {
  [OptionName.noOption]: {
    label: "No Option",
    value: OptionName.noOption,
    options: [
      {
        label: "",
        value: 0,
      },
    ],
  },
  [OptionName.roe]: {
    label: "ROE",
    value: OptionName.roe,
    options: [
      [
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
      [
        [
          {
            label: "WEAPON FREE",
            value: 1,
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
      ],
    ],
  },
  [OptionName.reactionOnThreat]: {
    label: "Reaction To Threat",
    value: OptionName.reactionOnThreat,
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
  [OptionName.radarUsing]: {
    label: "Radar Using",
    value: OptionName.radarUsing,
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
  [OptionName.flareUsing]: {
    label: "Chaff - Flare Using",
    value: OptionName.flareUsing,
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
  [OptionName.formation]: {
    label: "Formation",
    value: OptionName.formation,
    options: [
      [
        {
          label: "Helicopter - Wedge",
          key: Formation.heli_wedge,
          value: [
            {
              label: "Helicopter - Wedge 70",
              key: 1,
              value: 524288,
            },
          ],
        },
        {
          label: "Helicopter - Column",
          key: Formation.heli_column,
          value: [
            {
              label: "Helicopter - Column 70",
              key: 1,
              value: 720896,
            },
          ],
        },
        {
          label: "Helicopter - Echelon",
          key: Formation.heli_echelon,
          value: [
            {
              label: "Helicopter - Echelon Right 70",
              key: 1,
              value: 589825,
            },
            {
              label: "Helicopter - Echelon Left 70",
              key: 2,
              value: 590081,
            },
          ],
        },
        {
          label: "Helicopter - Front",
          key: Formation.heli_front,
          value: [
            {
              label: "Helicopter - Right Front 300",
              key: 1,
              value: 655361,
            },
            {
              label: "Helicopter - Right Front 600",
              key: 2,
              value: 655362,
            },
            {
              label: "Helicopter - Left Front 300",
              key: 3,
              value: 655617,
            },
            {
              label: "Helicopter - Left Front 600",
              key: 4,
              value: 655618,
            },
          ],
        },
      ],
      [
        {
          label: "Fixed Wing - Line Abreast",
          key: Formation.line_abreast,
          value: [
            {
              label: "Fixed Wing - Line Abreast Close",
              key: 1,
              value: 65537,
            },
            {
              label: "Fixed Wing - Line Abreast Open",
              key: 2,
              value: 65538,
            },
            {
              label: "Fixed Wing - Line Abreast Group Close",
              key: 3,
              value: 65539,
            },
          ],
        },
        {
          label: "Fixed Wing - Trail",
          key: Formation.trail,
          value: [
            {
              label: "Fixed Wing - Trail Close",
              key: 1,
              value: 131073,
            },
            {
              label: "Fixed Wing - Trail Open",
              key: 2,
              value: 131074,
            },
            {
              label: "Fixed Wing - Trail Group Close",
              key: 3,
              value: 131075,
            },
          ],
        },
        {
          label: "Fixed Wing - Wedge",
          key: Formation.wedge,
          value: [
            {
              label: "Fixed Wing - Wedge Close",
              key: 1,
              value: 196609,
            },
            {
              label: "Fixed Wing - Wedge Open",
              key: 2,
              value: 196610,
            },
            {
              label: "Fixed Wing - Wedge Group Close",
              key: 3,
              value: 196611,
            },
          ],
        },
        {
          label: "Fixed Wing - Echelon Right",
          key: Formation.echelon_right,
          value: [
            {
              label: "Fixed Wing - Echelon Right Close",
              key: 1,
              value: 262145,
            },
            {
              label: "Fixed Wing - Echelon Right Open",
              key: 2,
              value: 262146,
            },
            {
              label: "Fixed Wing - Echelon Right Group Close",
              key: 3,
              value: 262147,
            },
          ],
        },
        {
          label: "Fixed Wing - Echelon",
          key: Formation.echelon_left,
          value: [
            {
              label: "Fixed Wing - Echelon Left Close",
              key: 1,
              value: 327681,
            },
            {
              label: "Fixed Wing - Echelon Left Open",
              key: 2,
              value: 327682,
            },
            {
              label: "Fixed Wing - Echelon Left Group Close",
              key: 3,
              value: 327683,
            },
          ],
        },
        {
          label: "Fixed Wing - Finger Four",
          key: Formation.finger_four,
          value: [
            {
              label: "Fixed Wing - Finger Four Close",
              key: 1,
              value: 393217,
            },
            {
              label: "Fixed Wing - Finger Four Open",
              key: 2,
              value: 393218,
            },
            {
              label: "Fixed Wing - Finger Four Group Close",
              key: 3,
              value: 393219,
            },
          ],
        },
        {
          label: "Fixed Wing - Spread Four",
          key: Formation.spread_four,
          value: [
            {
              label: "Fixed Wing - Spread Four Close",
              key: 1,
              value: 458753,
            },
            {
              label: "Fixed Wing - Spread Four Open",
              key: 2,
              value: 458754,
            },
            {
              label: "Fixed Wing - Spread Four Group Close",
              key: 3,
              value: 458755,
            },
          ],
        },
        {
          label: "Fixed Wing WW2 - Bomber Element",
          key: Formation.ww2_bomber_element,
          value: [
            {
              label: "Fixed Wing WW2 - Bomber Element Close",
              key: 1,
              value: 786433,
            },
            {
              label: "Fixed Wing WW2 - Bomber Element Open",
              key: 2,
              value: 786434,
            },
            {
              label: "Fixed Wing WW2 - Bomber Element Group Close",
              key: 3,
              value: 786435,
            },
          ],
        },
        {
          label: "Fixed Wing WW2 - Bomber Element Height",
          key: Formation.ww2_bomber_element_height,
          value: [
            {
              label: "Fixed Wing WW2 - Bomber Element Height Close",
              key: 1,
              value: 851969,
            },
          ],
        },
        {
          label: "Fixed Wing WW2 - Fighter Vic",
          key: Formation.ww2_fighter_vic,
          value: [
            {
              label: "Fixed Wing WW2 - Fighter Vic Close",
              key: 1,
              value: 917505,
            },
            {
              label: "Fixed Wing WW2 - Fighter Vic Open",
              key: 2,
              value: 917506,
            },
          ],
        },
        {
          label: "Fixed Wing Modern - Bomber Element",
          key: Formation.modern_bomber_element,
          value: [
            {
              label: "Fixed Wing Modern - Bomber Element Close",
              key: 1,
              value: 1114113,
            },
            {
              label: "Fixed Wing Modern - Bomber Element Open",
              key: 2,
              value: 1114114,
            },
          ],
        },
      ],
    ],
  },
  [OptionName.rtbOnBingo]: {
    label: "RTB On Bingo Fuel",
    value: OptionName.rtbOnBingo,
    options: flagSelect,
  },
  [OptionName.silence]: {
    label: "Silence",
    value: OptionName.silence,
    options: flagSelect,
  },
  [OptionName.disperseOnAttack]: {
    label: "Disperse On Attack",
    value: OptionName.disperseOnAttack,
    data: 600,
  },
  [OptionName.alarmState]: {
    label: "Alarm State",
    value: OptionName.alarmState,
    options: [
      {
        label: "Auto",
        value: 0,
      },
      {
        label: "Green",
        value: 1,
      },
      {
        label: "Red",
        value: 2,
      },
    ],
  },
  [OptionName.rtbOnOutOfAmmo]: {
    label: "RTB On Out Of Ammo",
    value: OptionName.rtbOnOutOfAmmo,
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
  [OptionName.awarnessLevel]: {
    label: "Awarness Level",
    value: OptionName.awarnessLevel,
    options: [
      {
        label: "Safe",
        value: 0,
      },
      {
        label: "Aware",
        value: 1,
      },
      {
        label: "Danger",
        value: 2,
      },
    ],
  },
  [OptionName.ecmUsing]: {
    label: "ECM Using",
    value: OptionName.ecmUsing,
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
  [OptionName.prohibitAA]: {
    label: "Restrict Air-to-Air Attack",
    value: OptionName.prohibitAA,
    options: flagSelect,
  },
  [OptionName.prohibitJett]: {
    label: "Restrict Jettision",
    value: OptionName.prohibitJett,
    options: flagSelect,
  },
  [OptionName.prohibitAB]: {
    label: "Restrict Afterburner",
    value: OptionName.prohibitAB,
    options: flagSelect,
  },
  [OptionName.prohibitAG]: {
    label: "Restrict Air-to-Ground Attack",
    value: OptionName.prohibitAG,
    options: flagSelect,
  },
  [OptionName.missileAttack]: {
    label: "AA Missile Attack Ranges",
    value: OptionName.missileAttack,
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
  [OptionName.prohibitWpPassReport]: {
    label: "No Report Waypoint Pass",
    value: OptionName.prohibitWpPassReport,
    options: flagSelect,
  },
  [OptionName.engageAirWeapons]: {
    label: "Engage Air Weapons",
    value: OptionName.engageAirWeapons,
    options: flagSelect,
  },
  [OptionName.radioUsageContact]: {
    label: "Radio Usage When Contact",
    value: OptionName.radioUsageContact,
    options: treeSelect,
  },
  [OptionName.radioUsageEngage]: {
    label: "Radio Usage When Engage",
    value: OptionName.radioUsageEngage,
    options: treeSelect,
  },
  [OptionName.radioUsageKill]: {
    label: "Radio Usage When Kill",
    value: OptionName.radioUsageKill,
    options: treeSelect,
  },
  [OptionName.aircraftInterceptRange]: {
    label: "Aircraft Intercept Range",
    value: OptionName.aircraftInterceptRange,
    data: 100,
  },
  [OptionName.jettTanksIfEmpty]: {
    label: "Jettison fuel tanks when empty",
    value: OptionName.jettTanksIfEmpty,
    options: flagSelect,
  },
  [OptionName.forcedAttack]: {
    label: "Override AI attack avoidance decisions",
    value: OptionName.forcedAttack,
    options: flagSelect,
  },
  [OptionName.altRestrictionMin]: {
    label: "Altitude Restriction Min",
    value: OptionName.altRestrictionMin,
    data: 200,
  },
  [OptionName.restrictTarget]: {
    label: "Restrict Target",
    value: OptionName.restrictTarget,
    options: [
      {
        label: "Engage All Units",
        value: 0,
      },
      {
        label: "Engage Air Units Only",
        value: 1,
      },
      {
        label: "Engage Ground Units Only",
        value: 2,
      },
    ],
  },
  [OptionName.altRestrictionMax]: {
    label: "Altitude Restriction Max",
    value: OptionName.altRestrictionMax,
    data: 3500,
  },
};
