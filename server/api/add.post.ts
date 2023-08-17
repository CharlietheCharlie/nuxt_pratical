import { getQuery } from "h3";
import { add } from "../lib/firestore";

export default defineEventHandler(async (e) => {
  try {
    const query = getQuery(e);
    const body = await getQuery(e);
    const docRef = await add(query.col as string, body);

    return { result: docRef };
  } catch (error) {
    return { error: error.message };
  }
});
