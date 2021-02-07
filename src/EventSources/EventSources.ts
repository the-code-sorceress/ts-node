import { IEventSources } from "@mvf/servicer";
import { Rest, RestEvents } from "./Rest";

export const EventSources: IEventSources = {
  [Rest.TYPE]: RestEvents,
};
