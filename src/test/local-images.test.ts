import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Original file fingerprints: detect removal, recompression, or replacement.
const originals = [
  ["aparelhos.jpg", "0b98681550d51b1aeae131100ec3efa9f953dc1bd28095494140dc5c8460293f"],
  ["equipe.jpg", "540df8a332ef5eb5f39b3bdc63584c09fc41b43063c58bc1f4e9589bf3840b9a"],
  ["espaldar.jpg", "0118334ce59f4c8f89d536a4f0436e0af5b98723addbb22578e3355687b3425c"],
  ["estudio.jpg", "43f2849f9ce3cfe26dcf4cafdaa56738801f8449165dd1428060acb472af7757"],
  ["fisio.jpg", "50d00a3a4a9a5094825f26053519943db0e82283ea47392a0c7f5f9ef4e2f847"],
  ["logo.png", "3eb6662951b0c81bcf78dc8566347b7d1290f55f787365d58823980c8627f2b1"],
  ["parede-logo.jpg", "b4f53336280c699f0194a94116200310cb4512d103600bb6a732835d98e72231"],
  ["pilates.jpg", "1cc258d8ed89fa5bf69074f5829d978f3580b8d1233af0c3ca74e3d166926b8a"],
  ["sala-principal.jpg", "f5a10a703c183139c5b54e445e9576ed4ff3ef565966975b8bab5876621ec9c0"],
  ["sala-reformer.jpg", "c37282c582ed2b71fce6a07613dcd7a8f08891fa07cce6e536a0fe94dfd88656"],
];

describe("Portable original images", () => {
  it.each(originals)("preserves the original bytes of public/images/%s", (name, hash) => {
    const bytes = readFileSync(resolve(process.cwd(), "public/images", name));
    expect(createHash("sha256").update(bytes).digest("hex")).toBe(hash);
  });
});