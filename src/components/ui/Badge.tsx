export const Badge = ({ 
  children, 
  variant = "default",
  className = ""
}: { 
  children: React.ReactNode; 
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}) => {
  const baseStyles = "px-2.5 py-0.5 rounded-full text-xs font-medium font-mono inline-flex items-center justify-center transition-colors";
  
  const variants = {
    default: "bg-[#18181B] text-[#FFFFFF]",
    primary: "bg-[#E3B140]/10 text-[#E3B140] border border-[#E3B140]/25",
    secondary: "bg-[#E3B140]/20 text-[#E3B140] border border-[#E3B140]/30",
    outline: "bg-transparent text-[#A1A1AA] border border-[#262626]"
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
