import { ref, set } from "firebase/database";
import { database } from "../lib/firebase";

export async function addToHallOfFame({ name, faculty, id }) {
  await set(ref(database, `/hall-of-fame/${id}`), { name, faculty, id });
}
