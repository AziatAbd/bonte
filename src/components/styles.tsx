const StyledComponents = {
  Container: ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  ),

  Button: ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
  }: {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
    const variants = {
      primary:
        "bg-white hover:bg-white focus:ring-red-500 text-black hover:bg-gray-500 hover:text-gray-500",
      secondary:
        "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
      outline:
        "border border-gray-300 text-white hover:border-gray-500 hover:text-gray-500 focus:ring-gray-500",
      ghost: "text-white hover:bg-white/10",
    };
    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },

  Card: ({
    children,
    className = "",
    hover = false,
  }: {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
  }) => (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden relative min-h-[400px] w-[380px] flex flex-col justify-end ${
        hover
          ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  ),
};

export const { Container, Button, Card } = StyledComponents;
