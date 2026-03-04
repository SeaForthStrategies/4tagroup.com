interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "blue" | "default";
  className?: string;
}

const variants = {
  red: "bg-red/20 text-red border-red/30",
  blue: "bg-aviation-blue/20 text-aviation-blue border-aviation-blue/30",
  default: "bg-gray-100 text-text border-gray-200",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant as keyof typeof variants] ?? variants.default} ${className}`}>
      {children}
    </span>
  );
}
