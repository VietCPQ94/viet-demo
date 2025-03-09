// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import pako from "pako";

export default (data: string) => {
  const decodedData = atob(data);
  const byteArray = new Uint8Array(
    decodedData.split("").map((char) => char.charCodeAt(0))
  );
  const inflatedData = pako.inflate(byteArray, { to: "string" });
  const loader = new OBJLoader();
  const obj = loader.parse(inflatedData);
  return obj;
};
