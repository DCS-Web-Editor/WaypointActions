# waypointactions

## 0.6.1

### Patch Changes

- (feat): Added targetTypes data

## 0.6.0

### Minor Changes

- ee5274a: (refactor): Moved action defs to json
- 9fef9f5: (feat): Added actionList validation

### Patch Changes

- a1a0d11: (refactor): Changed setAction in EditAction.vue to use new action APIs
- e4efdd1: (feat): Added template for PerformCommand
- 4108b78: (chore): Update deps
- bdde3f0: (feat): Added PerformTask template
- e4efdd1: (fix): Removed invalid actions for ships and vehicles
- bdde3f0: (refactor): Split components into views and components
- e4efdd1: (fix): Fixed null params for commands
- 5e655fd: (feat): Added support for all actions in setActionValue
- 2e2360f: (feat): Added types to action creators
- e4efdd1: (feat): Added types for subActionOptions
- e4efdd1: (feat): Added boilerplate for the rest of the action selectors
- 9131b1c: (feat): Added availableWeapons
- 582ac5c: (fix): Fixed the creation of EnrouteTasks since keys and ids were improperly casted

## 0.6.0-next.2

### Minor Changes

- ee5274a: (refactor): Moved action defs to json
- 9fef9f5: (feat): Added actionList validation

### Patch Changes

- 2e2360f: (feat): Added types to action creators

## 0.5.1-next.1

### Patch Changes

- bdde3f0: (feat): Added PerformTask template
- bdde3f0: (refactor): Split components into views and components
- 582ac5c: (fix): Fixed the creation of EnrouteTasks since keys and ids were improperly casted

## 0.5.1-next.0

### Patch Changes

- a1a0d11: (refactor): Changed setAction in EditAction.vue to use new action APIs
- e4efdd1: (feat): Added template for PerformCommand
- 4108b78: (chore): Update deps
- e4efdd1: (fix): Removed invalid actions for ships and vehicles
- e4efdd1: (fix): Fixed null params for commands
- 5e655fd: (feat): Added support for all actions in setActionValue
- e4efdd1: (feat): Added types for subActionOptions
- e4efdd1: (feat): Added boilerplate for the rest of the action selectors
- 9131b1c: (feat): Added availableWeapons

## 0.5.0

### Minor Changes

- 525e7c3: (feat): Added automatic actions

### Patch Changes

- 525e7c3: (feat): Added hook for entry state
- d41f1bc: (fix): Fixed parseOption not working with values that aren't the index
- 525e7c3: (fix): Fixed some type names overlapping with each other
- 525e7c3: (feat): Updated types for various actionTypes
- d41f1bc: (refactor): Removed CustomModal.vue as it was deprecated
- 525e7c3: (refactor): Added more strict param arguments to createWrappedAction
- 525e7c3: (fix): Fixed upper level task names
- d41f1bc: (fix): Fixed params carrying over to the next option

## 0.4.1

### Patch Changes

- 714104c: (refactor): Moved default action creators to setAction
- 359124f: (fix): Fixed create task generating the wrong object structure
- 3e04dbb: (chore): Update some devDeps
- 359124f: (refactor): Renamed most types and got rid of unused types

## 0.4.0

### Minor Changes

- 23b4191: (feat): Added support for all options

### Patch Changes

- b943e38: (refactor): Consolidated action creation functions
- 7029b82: (refactor): Changed enums.ts to consts.ts, and their respective type names to better reflect the file contents
- 7029b82: (fix): Intergrated entryStore instead of inject/provide
- 23b4191: (refactor): Refactored the specific actions selections to be more scalable
- 7029b82: (feat): Added support for number based options
- eab0cfd: (chore): Changed eslint config
- 7029b82: (fix): Corrected the default params when changing the type of the action
- eab0cfd: (chore): Updated depedencies
- a182689: (chore): Removed husky as its redundant to CI workflow
- 7029b82: (fix): Fixed default subActionOptions value not changing when changing the type of the action

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
