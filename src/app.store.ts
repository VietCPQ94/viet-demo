import { signify } from "react-signify";
import { TLog } from "./models/log.model";
// import data from "./data.json";

type TMainStore = {
  loaderStatus: "INIT" | "OPEN" | "CLOSE";
};

export const sMain = signify<TMainStore>({
  loaderStatus: "INIT",
});

export const sLog = signify<{ info: TLog | null }>({
  info: null,
  // info: JSON.parse(JSON.stringify(data)),
});
