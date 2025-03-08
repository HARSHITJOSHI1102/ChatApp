const AuthImagePattern = ({ title, subtitle }) => {
  // Define a consistent pulse pattern (e.g., even indices pulse)
  const pulsePattern = Array.from({ length: 9 }, (_, i) => i % 2 === 0);
  return (
    <div className="flex items-center justify-center bg-base-200 p-6 lg:p-12 w-full">
      <div className="max-w-md text-center">
        {/* Animated Grid Pattern */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {pulsePattern.map((shouldPulse, i) => (
            <div
              key={i}
              className={`w-16 h-16 bg-primary ${
                shouldPulse ? "animate-pulse" : ""
              }`}
            ></div>
          ))}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
