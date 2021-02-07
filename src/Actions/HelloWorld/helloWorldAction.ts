import { ExpressAction, IPayload } from "@mvf/servicer";

const action: ExpressAction<IPayload, IPayload> = async () => {
  return {
    response: "Hello World"
  };
};

export default action;
