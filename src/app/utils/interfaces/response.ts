import { Design } from "./design";

export interface Response {
  data: Design[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
