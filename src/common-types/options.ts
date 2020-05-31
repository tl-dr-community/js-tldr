export interface Option {
  body: string;
  category: string;
  name: string;
  path: string;
  searchString: string;
}

export type Result = {
  item: Option;
  score?: number;
};
