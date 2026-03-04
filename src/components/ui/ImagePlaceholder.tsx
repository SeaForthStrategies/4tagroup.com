interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  className?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = "16/9",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-navy ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={`Placeholder for: ${label}`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, #1E5FA8 45%, #1E5FA8 55%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, #1E5FA8 45%, #1E5FA8 55%, transparent 55%)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center sm:p-6">
        <p className="text-xs font-medium text-text-muted sm:text-sm">
          [ Image Placeholder: {label} ]
        </p>
        <p className="mt-1.5 text-[10px] text-text-muted/70 sm:mt-2 sm:text-xs">
          Royalty-free image to be added (Unsplash / Pexels)
        </p>
      </div>
    </div>
  );
}
