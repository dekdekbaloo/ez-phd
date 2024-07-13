import { format } from "date-fns";

export function createCertID() {
  return `CU${format(new Date(), "dMMyyyyss")}`;
}
