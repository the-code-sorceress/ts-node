import { actionRoute, IRoute, Method } from "@mvf/servicer";
import { Rest } from "../../EventSources/Rest";

const routes: IRoute[] = [
  {
    action: actionRoute(Rest.Event.HELLO_WORLD),
    method: Method.GET,
    path: "/hello_world",
  },
];

export default routes;
