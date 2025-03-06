import { load } from "ion-js";
import { TLog } from "../models/log.model";
import { sMain } from "@/app.store";

export default (callback: (log: TLog) => void, onFallback: () => void) => {
  const input: HTMLInputElement = document.createElement("input");
  input.type = "file";
  input.accept = ".ion";
  input.multiple = false;

  input.onchange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const fileList: FileList | null = target.files;

    if (fileList && fileList.length > 0) {
      sMain.set((n) => (n.value.loaderStatus = "OPEN"));
      const file: File = fileList[0];
      const reader: FileReader = new FileReader();

      reader.onload = (e) => {
        const text = e.target?.result as ArrayBuffer;

        const result: TLog = JSON.parse(JSON.stringify(load(text)));
        callback(result);
        sMain.set((n) => (n.value.loaderStatus = "CLOSE"));
      };

      reader.readAsArrayBuffer(file);
    } else {
      onFallback();
    }
  };

  input.oncancel = () => {
    onFallback();
  };

  input.click();
};
