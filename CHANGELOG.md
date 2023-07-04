# waypointactions

## 0.4.0

### Minor Changes

- 7e28855: Added support for treeSelect support for options and formation select support

### Patch Changes

- 7e28855: Updated utils to support new changes
- 7e28855: Fixed tree select object having incorrect key names for some units
- 7e28855: Fixed actions defintions to form to naive-ui types
- 6675da3: (refactor): Changed enums to "as const" objects

## 0.3.0

### Minor Changes

- e3b152b: Added ROE value selection

### Patch Changes

- e3b152b: Added store entrypoint for external data
- 36726c0: Added name property, fixed action cloning not affecting only the new action
- 36726c0: Added params to defs, updated types (previous commit)
- 1776fc1: Finished styles for EditConditon.vue

## 0.2.0

### Minor Changes

- 3d02680: Changed styling to be more consistent

### Patch Changes

- 08ff125: Added auto and enabled attributes to actionList
- 3386254: Added the logic for dealing with conditon/stop condition modals when activated from editAction modal
- bfb07c2: Refactored, reduced bundle size, removed deprecated code, updated depedencies
- bfb07c2: Fixed various issues related to currentSelection/list indexes

## 0.1.12

### Patch Changes

- 286a284: Completed available actions
- 2ec11a2: Added Action drop down
- e16a922: Refactored file structure and added useTasks hook
- 2ec11a2: Fixed some buttons not disabling
- 2ec11a2: Various bug fixes, and other small changes

## 0.1.11

### Patch Changes

- a7c75ed: Added CI and Mergify for automatic changelog versioning based on commit args
- a7c75ed: Added createTask and createOption for creating actions of all types, replaces createOption in ActionList.vue
- a7c75ed: Added available actions for aircraft
- a7c75ed: Fixed enrouteTask enum
- a7c75ed: Updated ROE and alarmState properties in options.ts to account for different vehicle types
- a7c75ed: Fixed Action conditional type as well as adding stricter id types for UniversalAction
- a7c75ed: Updated type AvailableActions with string literals where needed

## 0.1.10

### Patch Changes

- 96f3241: Added available actions for performTask for fixed wing

## 0.1.9

### Patch Changes

- Added changeset
- Updated @typescript-eslint/eslint-plugin -> 5.60.0
- Updated @typescript-eslint/parser -> 5.60.0"
