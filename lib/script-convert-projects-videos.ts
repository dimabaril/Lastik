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
