import { projects } from "./projects";
import { execSync } from "child_process";
import { dirname, basename, join } from "path";

const MAX_WIDTH_HORIZONTAL = 1000;
const MAX_WIDTH_VERTICAL = 750;

for (const project of projects) {
  if (!project.videosOrigin || project.videosOrigin.length === 0) continue;

  for (const videoPath of project.videosOrigin) {
    const input = "./public" + videoPath;
    const dir = dirname(input);
    const ext = videoPath.slice(videoPath.lastIndexOf("."));
    const name = basename(input, ext);
    const outpath = join(dir, name + "-converted.webm");

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
      console.error(`[${project.slug}] Не удалось прочитать: ${input}`);
      continue;
    }

    const isHorizontal = width >= height;
    const targetWidth = isHorizontal
      ? MAX_WIDTH_HORIZONTAL
      : MAX_WIDTH_VERTICAL;

    if (width <= targetWidth) {
      console.log(
        `[${project.slug}] ${basename(input)} — уже ${width}x${height}, пропускаем`,
      );
      continue;
    }

    console.log(
      `[${project.slug}] ${basename(input)} — ${width}x${height} → ширина ${targetWidth}px`,
    );

    const cmd = `ffmpeg -y -i "${input}" -vf "scale=${targetWidth}:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 33 "${outpath}"`;
    console.log(cmd);
    execSync(cmd, { stdio: "inherit" });

    // Реальные размеры результата
    const probeOut = execSync(
      `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "${outpath}"`,
    )
      .toString()
      .trim();
    const [outW, outH] = probeOut.split(",").map(Number);
    console.log(`  → готово: ${outW}x${outH}\n`);
  }
}
