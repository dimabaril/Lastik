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
  return (
    <div
      className={`flex flex-col items-center gap-3 rounded-3xl p-10 ${styles.floating} ${className ? className : ""}`}
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
    </div>
  );
}
