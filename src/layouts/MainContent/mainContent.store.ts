import { Topic } from "@/types/log.typs";
import { signify } from "react-signify";

interface TsCam {
  time: number;
  timestamp: number;
  speed: number;
  isRuning: boolean;
  topic?: Topic;
  isDrag: boolean;
}

export const sCam = signify<TsCam>({
  time: 0,
  timestamp: 0,
  speed: 1,
  isRuning: false,
  isDrag: false,
});
