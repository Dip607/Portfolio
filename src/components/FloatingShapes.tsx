const FloatingShapes = () => {
  const shapes = [
    { type: 'circle', size: 'w-16 h-16', top: '10%', left: '10%', delay: '0s', duration: '8s' },
    { type: 'square', size: 'w-12 h-12', top: '20%', right: '15%', delay: '1s', duration: '10s' },
    { type: 'triangle', size: 'w-20 h-20', bottom: '30%', left: '20%', delay: '2s', duration: '12s' },
    { type: 'circle', size: 'w-24 h-24', top: '60%', right: '10%', delay: '0.5s', duration: '9s' },
    { type: 'square', size: 'w-14 h-14', bottom: '20%', right: '25%', delay: '1.5s', duration: '11s' },
    { type: 'circle', size: 'w-10 h-10', top: '40%', left: '5%', delay: '2.5s', duration: '7s' },
    { type: 'triangle', size: 'w-16 h-16', top: '70%', left: '40%', delay: '3s', duration: '13s' },
    { type: 'square', size: 'w-8 h-8', top: '15%', left: '60%', delay: '0.8s', duration: '9s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.size} opacity-20`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            animation: `float ${shape.duration} ease-in-out infinite`,
            animationDelay: shape.delay,
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full bg-primary blur-sm" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full bg-accent blur-sm rotate-45" />
          )}
          {shape.type === 'triangle' && (
            <div 
              className="w-0 h-0 blur-sm"
              style={{
                borderLeft: `${parseInt(shape.size.split(' ')[0].replace('w-', '')) * 4}px solid transparent`,
                borderRight: `${parseInt(shape.size.split(' ')[0].replace('w-', '')) * 4}px solid transparent`,
                borderBottom: `${parseInt(shape.size.split(' ')[0].replace('w-', '')) * 4}px solid hsl(var(--primary))`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
