enum OptionName {
  noOption = -1,
  roe = 0,
  reactionOnThreat = 1,
  radarUsing = 3,
  flareUsing = 4,
  formation = 5,
  rtbOnBingo = 6,
  silence = 7,
  disperseOnAttack = 8,
  alarmState = 9,
  rtbOnOutOfAmmo = 10,
  awarnessLevel = 11,
  following = 12,
  ecmUsing = 13,
  prohibitAA = 14,
  prohibitJett = 15,
  prohibitAB = 16,
  prohibitAG = 17,
  missileAttack = 18,
  prohibitWpPassReport = 19,
  engageAirWeapons = 20,
  radioUsageContact = 21,
  radioUsageEngage = 22,
  radioUsageKill = 23,
  aircraftInterceptRange = 24,
  jettTanksIfEmpty = 25,
  forcedAttack = 26,
  altRestrictionMin = 27,
  restrictTarget = 28,
  altRestrictionMax = 29,
}

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

export const options = {
  [OptionName.roe]: {
    label: "ROE",
    value: OptionName.roe,
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
    /**
     * @todo Add formation options from useFormation hook
     */
    options: []
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
    /**
     * @todo Add options from DCS ME
     */
    options: [],
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
  [OptionName.following]: {
    label: "Following",
    value: OptionName.following,
    options: [],
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
    data: {
      min: 0,
      max: 100,
      default: 100,
    },
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
    data: {
      min: 0,
      max: 1000000,
      default: 200,
    },
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
    data: {
      min: 0,
      max: 1000000,
      default: 3500,
    },
  },
};
