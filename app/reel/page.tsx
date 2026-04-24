import VimeoPlayer from "@/app/components/VimeoPlayer";

// 1073893317

export default function ArtCourse() {
  return (
    <div className="flex flex-col flex-1 w-full bg-black text-white items-center justify-center max-w-screen-xl mx-auto p-6">
      <h1 className="sr-only">Reel</h1>

      <VimeoPlayer videoId={1073893317} />
    </div>
  );
}
