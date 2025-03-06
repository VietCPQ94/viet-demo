import { TCamSpeed } from "@/types/common.type";

type TlsSpeed = {
  label: TCamSpeed;
  value: number;
};
export const LS_SPEED: TlsSpeed[] = [
  {
    label: "x1",
    value: 1,
  },
  {
    label: "x2",
    value: 2,
  },
  {
    label: "x5",
    value: 5,
  },
];
