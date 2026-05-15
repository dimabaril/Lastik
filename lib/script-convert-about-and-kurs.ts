import { execSync } from "child_process";
import { dirname, basename, join } from "path";
import { readFileSync, writeFileSync } from "fs";

const MAX_WIDTH_HORIZONTAL = 1000;
// const MAX_WIDTH_HORIZONTAL = 2000;
const MAX_WIDTH_VERTICAL = 750;

const PAGE_PATH = "./app/about/page.tsx";

const videoPaths: string[] = [
  // "/about/neo (1080p) 2.mp4",
  // "/about/Comp 2_3.mp4",
  // "/about/MASTER preview 15-04_1.mp4",
  // "/about/ya_shedevrium.mp4",
  // "/about/leto-luzi.mp4",
  // "/about/AI textures.mp4",
  // "/about/all4.mp4",

  // надо конвертить наверно на ширину 2000
  "/kurs/Comp 2_2.mp4",
];

let pageContent = readFileSync(PAGE_PATH, "utf-8");

for (const videoPath of videoPaths) {
  const input = "./public" + videoPath;
  const dir = dirname(input);
  const ext = videoPath.slice(videoPath.lastIndexOf("."));
  const name = basename(input, ext);
  const outpath = join(dir, name + "-converted.webm");
  const outVideoPath =
    videoPath.slice(0, videoPath.lastIndexOf(".")) + "-converted.webm";

  // Получаем размеры оригинального видео
  let width: number, height: number;
  try {
    const probeOutput = execSync(
      `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "${input}"`,
    )
      .toString()
      .trim();
    [width, height] = probeOutput.split(",").map(Number);
  } catch {
    console.error(`Не удалось прочитать: ${input}`);
    continue;
  }

  const isHorizontal = width >= height;
  const targetWidth = isHorizontal ? MAX_WIDTH_HORIZONTAL : MAX_WIDTH_VERTICAL;

  if (width <= targetWidth) {
    console.log(`${basename(input)} — уже ${width}x${height}, пропускаем`);
  } else {
    console.log(
      `${basename(input)} — ${width}x${height} → ширина ${targetWidth}px`,
    );

    const cmd = `ffmpeg -y -i "${input}" -vf "scale=${targetWidth}:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 33 "${outpath}"`;
    console.log(cmd);
    execSync(cmd, { stdio: "inherit" });

    const probeOut = execSync(
      `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "${outpath}"`,
    )
      .toString()
      .trim();
    const [outW, outH] = probeOut.split(",").map(Number);
    console.log(`  → готово: ${outW}x${outH}`);
  }

  // Заменяем путь в page.tsx
  pageContent = pageContent.replaceAll(
    `src="${videoPath}"`,
    `src="${outVideoPath}"`,
  );
  console.log(`  → путь заменён: ${videoPath} → ${outVideoPath}\n`);
}

writeFileSync(PAGE_PATH, pageContent, "utf-8");
console.log("✓ app/about/page.tsx обновлён");
