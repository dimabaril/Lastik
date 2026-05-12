import { projects } from "./projects";
import { execSync } from "child_process";
import { dirname, basename, join } from "path";

// import { TAG } from "./tags";

// const projects = [
//   {
//     slug: "eapteka",
//     size: 3,
//     thumb: {
//       origin: "/projects/eapteka/thumb/tab_thumb.webm",
//       video: "/projects/eapteka/thumb/tab_thumb-converted.webm",
//       poster: "/projects/eapteka/thumb/tab_thumb-poster.png",
//       videoSize: { width: 288, height: 288 },
//     },
//     title: "СБЕР / Еаптека",
//     description: "Description",
//     tags: [TAG["3D"], TAG.ADVERTISING],
//     vimeos: [
//       {
//         id: 676229349,
//       },
//     ],
//     credits: {
//       brand: "ЕАПТЕКА",
//       production: "Zebra Hero",
//     },
//     images: [],
//     videosOrigin: [
//       "/projects/eapteka/faces.webm",
//       "/projects/eapteka/eapteka_1.webm",
//       "/projects/eapteka/eapteka_2.webm",
//     ],
//     videos: [
//       "/projects/eapteka/faces-converted.webm",
//       "/projects/eapteka/eapteka_1-converted.webm",
//       "/projects/eapteka/eapteka_2-converted.webm",
//     ],
//     texts: [
//       "Для EApteka мы придумали серию визуальных героев — таблетки со своим характером и портреты людей, которым они предназначены.",

//       `**Лица**
//       Мы курировали съёмку, выбирали выразительные лица, это был классный опыт общения и взаимодействия с кучей таких разных людей.`,

//       `**Таблетки**
//       Дальше мы с каждой таблеткой мы работали как с персонажем: искали форму, настроение и ритм, чтобы она точно попадала в своего «человека».`,

//       `Отдельным слоем стал саунд-дизайн. Мы добавили ASMR-звучание — хруст, щелчки, мягкие касания — чтобы визуал буквально ощущался кожей.

//       В результате получился ролик, который говорит на языке фарм-категории, но звучит и выглядит совсем иначе.`,
//     ],
//     layout: [
//       // [{ type: "text", index: 0, cols: 7, colStart: 6 }],
//       [{ type: "text", index: 1, cols: 7 }],
//       [{ type: "video", index: 0, cols: 12 }],
//       [{ type: "text", index: 2, cols: 7 }],
//       [{ type: "video", index: 1, cols: 8, colStart: 3 }],
//       [{ type: "video", index: 2, cols: 8, colStart: 3 }],
//       [{ type: "text", index: 3, cols: 7 }],
//     ],
//   },
// ];

const sizes: Record<string, { width: number; height: number }> = {};

for (const project of projects) {
  const videoPath = project.thumb?.origin;
  if (!videoPath) continue;

  const projectSize = project.size ?? 6;
  // size 12 → 1256px -12px*2 padding -2px border * 1.3(так как зум)
  const targetWidth =
    Math.round(((projectSize * (1256 / 12) - 24 - 2) * 1.3) / 2) * 2;

  const input = "./public" + videoPath;
  const dir = dirname(input);
  const name = basename(input, ".webm");
  const outpath = join(dir, name + "-converted.webm");

  // генерируем видео для превью с ограничением по ширине и качеству
  const cmd = `ffmpeg -y -i "${input}" -vf "scale=${targetWidth}:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 33 "${outpath}"`;
  console.log(`[${project.slug}] size=${projectSize} → ${targetWidth}px`);
  console.log(cmd);
  execSync(cmd, { stdio: "inherit" });

  // Генерируем постер из оригинального видео с теми же размерами
  const posterPath = join(dir, name + "-poster.jpg");
  const posterCmd = `ffmpeg -y -i "${input}" -vf "scale=${targetWidth}:-2:flags=lanczos" -frames:v 1 "${posterPath}"`;
  // или из уже сконвертированного
  //   const posterCmd = `ffmpeg -y -i "${outpath}" -frames:v 1 "${posterPath}"`;
  console.log(`  → poster: ${posterPath}`);
  execSync(posterCmd, { stdio: "inherit" });

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
