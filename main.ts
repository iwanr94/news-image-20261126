// news-image-20261126: "The World Today" front page for Thursday 26 November 2026.
// Node 22, standard library only. The entry image lives beside this file as
// entry.png; the program copies it to /output/entry.png (or to the directory
// named by MAKEFUN_OUTPUT_DIR when running locally, e.g.:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is byte-for-byte, so both grader runs write identical bytes.

// The image itself is the entry: a 1024x1024 PNG front page drawn for this
// bounty (see README.md for the six stories it sums up). Nothing is fetched
// and nothing is generated at run time; the program only copies the file.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
