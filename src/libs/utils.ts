export const UnitOptions = [
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
