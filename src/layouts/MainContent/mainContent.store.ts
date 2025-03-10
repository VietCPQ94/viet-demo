import { ObjPos, Topic } from "@/types/log.type";
import { signify } from "react-signify";

interface TsCam {
  time: number;
  speed: number;
  isRuning: boolean;
  topic?: Topic;
  topicLogs?: Topic;
  imgLogs?: {
    timestamp: number;
    source: string;
  }[];
  isDrag: boolean;
}

interface TsVirtual {
  model?: object;
  positions: ObjPos[];
}

export const sVirtual = signify<TsVirtual>({
  positions: [],
});

export const sCam = signify<TsCam>({
  time: 0,
  speed: 1,
  isRuning: false,
  isDrag: false,
});

export const sTimer = signify<NodeJS.Timeout | undefined>(undefined);
