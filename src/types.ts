/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type Tasks ={
  tasks: Array<{
    auto: boolean;
    enabled: boolean;
    id: string;
    number: number;
    params: any;
  }>;
}

export type ActionList = {
  option: string;
  value: string;
}
