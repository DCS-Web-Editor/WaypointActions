export interface Tasks {
  tasks: Array<{
    auto: boolean;
    enabled: boolean;
    id: string;
    number: number;
    params: any;
  }>;
}
