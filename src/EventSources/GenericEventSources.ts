import { IEventSources } from "@mvf/servicer";
import { Rest, RestEvents } from "./Rest";

export const GenericEventSources: IEventSources = {
  [Rest.TYPE]: RestEvents,
};
