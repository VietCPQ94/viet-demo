import { Topic } from "@/types/log.type";
import { signify } from "react-signify";

interface TsCam {
  time: number;
  speed: number;
  isRuning: boolean;
  topic?: Topic;
  topicLog?: Topic;
  isDrag: boolean;
}

export const sCam = signify<TsCam>({
  time: 0,
  speed: 1,
  isRuning: false,
  isDrag: false,
});
