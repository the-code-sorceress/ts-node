import "Setup/dotenv/DotenvCapsule";

import * as config from "Setup/orm/ormconfig";
import "reflect-metadata";
import { Application, DaemonCommand, Express } from "@mvf/servicer";
import { createConnection } from "typeorm";
import { RestEvents } from "EventSources/Rest";
import routes from "Setup/express/routes";

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

