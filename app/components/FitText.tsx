interface FitTextProps {
  children: string;
  className?: string;
}

export default function FitText({ children, className }: FitTextProps) {
  return (
    <svg
      viewBox="0 0 1000 150"
      width="100%"
      height="auto"
      className="block"
    >
      <text
        x="0"
        y="120"
        textLength="100%"
        lengthAdjust="spacingAndGlyphs"
        className={className}
        style={{ fontSize: "120px", fill: "currentColor" }}
      >
        {children}
      </text>
    </svg>
  );
}
