import { DateTime } from "luxon";

export function getCurrentTime() {
  return DateTime.now().setZone("America/Monterrey");
}