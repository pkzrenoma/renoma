interface SectionDescriptionProps {
  description: string;
  className?: string;
  motionPreset?: "blur-right" | "blur-left";
  textColor?: "black" | "white";
  textAlign?: "left" | "right";
}

export default function SectionDescription({
  description,
  className,
  motionPreset,
  textColor = "black",
  textAlign = "left",
}: SectionDescriptionProps) {
  const textColorClass =
    textColor === "black" ? "text-black/90" : "text-white/90";

  return (
    <div className="mt-10">
      <p
        className={`max-w-sm text-[1.1rem] leading-relaxed ${textColorClass} ${textAlign} ${className} md:max-w-md`}
      >
        {description}
      </p>
    </div>
  );
}