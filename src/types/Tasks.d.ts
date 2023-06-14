export interface Tasks {
  tasks: Array<{
    auto: boolean;
    enabled: boolean;
    id: string;
    number: number;
    params: any;
  }>;
}

export interface OptionList {
  option: string;
  value: string;
}
