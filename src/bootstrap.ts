import * as tsConfigPaths from "tsconfig-paths"; 
import { dirname, basename, join } from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsConfig = require("../tsconfig.json");

const baseUrl = join("./", basename(dirname(__filename)));
tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths
});
