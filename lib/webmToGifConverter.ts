import { projects } from "./projects";
import { execSync } from "child_process";
import { dirname, basename, join } from "path";

// Собираем все preview-видео
const thumbVideos = projects
  .map((p) => p.thumb?.video)
  .filter(Boolean) as string[];

// Для каждого видео запускаем ffmpeg
for (const path of thumbVideos) {
  const input = "./public" + path;
  const dir = dirname(input);
  const name = basename(input, ".webm");
  const outpath = join(dir, name + ".gif");
  const cmd = `ffmpeg -y -i "${input}" -vf "scale=500:-1:flags=lanczos,fps=12" "${outpath}"`;
  console.log(cmd);
  execSync(cmd, { stdio: "inherit" });
}
