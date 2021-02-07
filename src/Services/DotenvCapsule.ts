import { overload } from "@mvf/servicer";

overload(
  "env/base",
  "env/private",
  "env/" + process.env.ENVIRONMENT_FILE,
);
