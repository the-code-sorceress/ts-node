import "./Services/DotenvCapsule";

import * as config from "Configs/ormconfig";
import "reflect-metadata";
import { Application, DaemonCommand, Express } from "@mvf/servicer";
import { createConnection } from "typeorm";
import { RestEvents } from "./EventSources/Rest";
import routes from "./Services/Express/routes";

const setupApplication = async (): Promise<void> => {
  await createConnection(config);
  const application = new Application();

  const express = new Express(
    RestEvents,
    routes,
  );

  application.addCommands(
    new DaemonCommand(express),
  );

  await application.run();
};

setupApplication();

