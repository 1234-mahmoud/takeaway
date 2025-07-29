export default function Button({ children, className, variant = "primary", ...props }) {
  const getButtonClasses = () => {
    const baseClasses = "px-6 py-1.5 rounded-3xl duration-300 cursor-pointer font-medium transition-all";
    
    switch (variant) {
      case "secondary":
        return `${baseClasses} bg-[var(--secondary)] hover:bg-[var(--secondary-light)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5`;
      case "accent":
        return `${baseClasses} bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5`;
      case "outline":
        return `${baseClasses} bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white`;
      default:
        return `${baseClasses} bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5`;
    }
  };

  return (
    <button
      {...props}
      className={`${getButtonClasses()} ${className || ""}`}
    >
      {children}
    </button>
  );
}
