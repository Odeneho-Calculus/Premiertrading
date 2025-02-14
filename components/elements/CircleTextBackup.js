const CircleText = ({ text = '', radius = 0 }) => {
  const characters = text.split('');
  const angleStep = characters.length > 0 ? 360 / characters.length : 0;
  // Calculate adjusted radius based on text length to ensure characters stay inside
  const adjustedRadius = Math.max(radius * 0.65, 0); // Use 65% of radius for tighter containment

  return (
    <div className="circle-text-container" style={{ 
      position: 'relative', 
      width: `${radius * 2}px`, 
      height: `${radius * 2}px`,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px' // Smaller base font size
    }}>
      {characters.map((char, index) => {
        const angle = index * angleStep;
        const x = radius + adjustedRadius * Math.cos((angle * Math.PI) / 180);
        const y = radius + adjustedRadius * Math.sin((angle * Math.PI) / 180);

        return (
          <span
            key={index}
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: `${radius}px ${radius}px`,
              left: Math.round(x),
              top: Math.round(y),
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '10px',
              height: '10px',
              fontSize: '10px'
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default CircleText;
