import Image from "next/image";

import styles from "./floating.module.css";

interface BubleProps {
  name: string;
  desc: string;
  text: string;
  userPic?: string;
  background?: string;
  size: {
    width: number;
    height: number;
    padding: number;
  };
  className?: string;
}

export default function Buble({
  name,
  desc,
  text,
  userPic,
  background,
  size,
  className,
}: BubleProps) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        {userPic && (
          <Image
            src={userPic}
            alt={name}
            width={85}
            height={85}
            className="rounded-full"
          />
        )}
        <div>
          <p className="font-unbounded text-xl font-bold text-[#56127F]">
            {name}
          </p>
          <p className="font-onest text-sm text-[#9578A7]">{desc}</p>
        </div>
      </div>
      <p className="font-onest text-base leading-tight font-semibold whitespace-pre-line text-[#56127F]">
        {text}
      </p>
    </>
  );

  return (
    <>
      {/* Mobile: CSS-bubble без фоновой картинки */}
      <div
        className={`relative flex max-w-[75vw] flex-col gap-3 self-end rounded-[50px] rounded-bl-none bg-[#ccf0ff] p-6 lg:hidden ${styles.floating} ${className ?? ""}`}
      >
        <div
          style={{
            position: "absolute",
            bottom: -28,
            left: 0,
            width: 0,
            height: 0,
            borderLeft: "0px solid transparent",
            borderRight: "30px solid transparent",
            borderTop: "30px solid #ccf0ff",
          }}
        />
        {content}
      </div>

      {/* Desktop: фиксированный размер */}
      <div
        className={`hidden flex-col items-center gap-3 rounded-3xl lg:flex ${styles.floating} ${className ? className : ""}`}
        style={{
          ...(background && {
            backgroundImage: `url(${background})`,
            backgroundSize: "100% 100%",
          }),
          ...(size && {
            width: size.width,
            height: size.height,
            padding: size.padding,
          }),
        }}
      >
        {content}
      </div>
    </>
  );
}
