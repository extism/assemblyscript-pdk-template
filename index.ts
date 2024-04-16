import { Config, Host, Var } from "@extism/as-pdk";

function myAbort(
  message: string | null,
  fileName: string | null,
  lineNumber: u32,
  columnNumber: u32,
): void {}

export function greet(): i32 {
  const name = Host.inputString();
  Host.outputString("Hello, " + name);
  return 0;
}
