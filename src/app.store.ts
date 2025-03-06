import { signify } from "react-signify";
import { TLog } from "./types/log.typs";

type TMainStore = {
  loaderStatus: "INIT" | "OPEN" | "CLOSE";
};

export const sMain = signify<TMainStore>({
  loaderStatus: "INIT",
});

export const sLog = signify<{ info: TLog | null }>({
  info: null,
});
