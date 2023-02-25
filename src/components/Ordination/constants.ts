import { OrderBy } from "../../services/api/comics/type"


export type OrdinationOption = {
  label: string;
  value: OrderBy;
};

export const ORDINATION_OPTIONS: OrdinationOption[] = [
  {
    label: "Last modified",
    value: "-modified",
  },
  {
    label: "A - Z",
    value: "title",
  },
  {
    label: "Z - A",
    value: "-title",
  },
  {
    label: "On sale date",
    value: "-onsaleDate",
  },
  {
    label: "On sale date (old to new)",
    value: "onsaleDate",
  },
];