import { Rest } from "./restTypes";
import { ExpressEventSource } from "@mvf/servicer";
import { helloWorldAction } from "Actions/HelloWorld";

export const RestEvents: ExpressEventSource = {
  [Rest.Event.HELLO_WORLD]: helloWorldAction,
};
