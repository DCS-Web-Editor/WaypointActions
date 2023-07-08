# waypointactions

## 0.3.1

### Patch Changes

- 7a4b263: (feat): Updated formation labels
- 7a4b263: (feat): Changed formation select to cascader

## 0.3.0

### Minor Changes

- 7e28855: (feat): Added support for treeSelect support for options and formation select support
- e3b152b: (feat): Added store entrypoint for external data
- 36726c0: (feat): Added name property, fixed action cloning not affecting only the new action
- 36726c0: (feat): Added params to defs, updated types (previous commit)

### Patch Changes

- 7e28855: (chore): Updated utils to support new changes
- 7e28855: (fix): Fixed tree select object having incorrect key names for some units
- 7e28855: (fix): Fixed actions defintions to form to naive-ui types
- 6675da3: (refactor): Changed enums to "as const" objects

## 0.2.4

### Patch Changes

- 1776fc1: (feat): Finished styles for EditConditon.vue

## 0.2.3

### Patch Changes

- 08ff125: (feat): Added auto and enabled attributes to actionList
- 3d02680: (feat): Changed styling to be more consistent
- 3386254: (feat): Added the logic for dealing with conditon/stop condition modals when activated from editAction modal
- bfb07c2: (chore): Refactored, reduced bundle size, removed deprecated code, updated depedencies
- bfb07c2: (fix): Fixed various issues related to currentSelection/list indexes

## 0.2.2

### Patch Changes

- 2ec11a2: (feat): Added Action drop down
- 2ec11a2: (fix): Fixed some buttons not disabling
- 2ec11a2: (fix): Various bug fixes, and other small changes

## 0.2.1

### Patch Changes

- e16a922: (feat): Added useTasks hook for easy and reactive access to tasks store
- e16a922: (refactor): Refactored file structure

## 0.2.0

### Minor Changes

- 286a284: (ci): Added CI and Mergify for automatic changelog versioning based on commit args
- a7c75ed: (feat): Added createTask and createOption for creating actions of all types, replaces createOption in ActionList.vue
- a7c75ed: (feat): Added available actions restriction so that units have the correct actions

### Patch Changes

- a7c75ed: (fix): Fixed enrouteTask enum
- a7c75ed: (fix): Updated ROE and alarmState properties in options.ts to account for different vehicle types
- a7c75ed: (fix): Fixed Action conditional type as well as adding stricter id types for UniversalAction
- a7c75ed: (fix): Updated type AvailableActions with string literals where needed
