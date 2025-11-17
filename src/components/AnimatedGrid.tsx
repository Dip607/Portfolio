const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--grid-blue) / 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--grid-blue) / 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />
      
      {/* Animated blue circles */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-grid-pulse" />
      <div className="absolute top-40 right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-grid-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-accent/15 blur-3xl animate-grid-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-1/4 w-64 h-64 rounded-full bg-accent/15 blur-3xl animate-grid-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Additional ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
    </div>
  );
};

export default AnimatedGrid;
