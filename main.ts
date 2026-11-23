// SPDX-License-Identifier: MIT
const LINE =
  "I asked my AI to write a one-line joke; it apologized, revised it nine times, and submitted the apology instead.";

if (LINE.length > 200) {
  console.error("line exceeds 200 characters");
  process.exit(1);
}
if (LINE.includes("\n")) {
  console.error("line must be a single line");
  process.exit(1);
}

console.log(LINE);
