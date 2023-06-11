export interface Tasks {
  id: string;
  params: {
    tasks: Array<{
      auto: boolean;
      enabled: boolean;
      id: string;
      number: number;
      params: DropdownParams | FormationParams | CheckboxParams | TreeSelectParams;
    }>;
  };
}

export interface DropdownParams {
  action: {
    id: string;
    params: {
      name: number;
      value: number;
    };
  };
}

export interface FormationParams extends DropdownParams {
  action: {
    id: string;
    params: {
      formationIndex: number;
      varientIndex: number;
    };
  };
}

export interface CheckboxParams extends DropdownParams {
  action: {
    id: string;
    params: {
      name: number;
      value: boolean;
    };
  };
}

export interface TreeSelectParams extends DropdownParams {
  action: {
    id: string;
    params: {
      name: number;
      value: string;
      noTargetTypes: string[];
      targetTypes: string[];
    };
  };
}

export interface Checkbox {
  label: string;
  value: number;
  enabled: boolean;
}

export interface TaskList {
  option: string;
  value: string;
}
