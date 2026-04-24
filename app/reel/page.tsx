import VimeoPlayer from "@/app/components/VimeoPlayer";

const VIMEO_REEL_ID = 1073893317;

export default function ArtCourse() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col items-center justify-center bg-black p-6 text-white">
      <h1 className="sr-only">Reel</h1>
      <VimeoPlayer videoId={VIMEO_REEL_ID} />
    </div>
  );
}
