import { ref, get, query, orderByChild } from "firebase/database";
import { database } from "../lib/firebase";

export async function getHallOfFame() {
  const hallOfFameByTime = query(
    ref(database, "/hall-of-fame"),
    orderByChild("createdAt")
  );
  const data = await get(hallOfFameByTime);
  // convert data to array
  const certificates = [];
  data.forEach((child) => {
    certificates.push(child.val());
  });
  certificates.reverse();
  return certificates;
}
