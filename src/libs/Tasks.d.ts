export interface Tasks {
  id: string;
  params: {
    tasks: Array<{
      auto: boolean;
      enabled: boolean;
      id: string;
      number: number;
      params: any; // Too many possible types to list here
      key?: string;
    }>;
  };
}

type Formation = Record<
  number,
  {
    type: string;
    varient: string[];
  }
>;

export interface TaskDef {
  options: Record<
    number,
    {
      name: string;
      items: string[] | Formation | null;
    }
  >;
}
