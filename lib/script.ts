import { projects } from "./projects";
import { execSync } from "child_process";
import { dirname, basename, join } from "path";

const sizes: Record<string, { width: number; height: number }> = {};

for (const project of projects) {
  const videoPath = project.thumb?.video;
  if (!videoPath) continue;

  const projectSize = project.size ?? 6;
  // size 12 → 1256px -12px*2 padding -2px border
  const targetWidth = Math.round((projectSize * (1256 / 12) - 24 - 2) / 2) * 2;

  const input = "./public" + videoPath;
  const dir = dirname(input);
  const name = basename(input, ".webm");
  const outpath = join(dir, name + "-converted.webm");

  const cmd = `ffmpeg -y -i "${input}" -vf "scale=${targetWidth}:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 33 "${outpath}"`;
  //   const cmd = `ffmpeg -y -i "${input}" -vf "scale=${targetWidth}:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 55 -deadline realtime -cpu-used 8 "${outpath}"`;
  console.log(`[${project.slug}] size=${projectSize} → ${targetWidth}px`);
  console.log(cmd);
  execSync(cmd, { stdio: "inherit" });

  // Получаем реальные размеры сконвертированного видео
  const probeOutput = execSync(
    `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "${outpath}"`,
  )
    .toString()
    .trim();
  const [width, height] = probeOutput.split(",").map(Number);
  sizes[project.slug] = { width, height };
  console.log(`  → actual: ${width}x${height}`);
}

console.log("\n=== Размеры сконвертированных видео (для thumb.size) ===");
console.log(JSON.stringify(sizes, null, 2));
