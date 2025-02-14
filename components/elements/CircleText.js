const CircleText = ({ text = '', radius = 0 }) => {
  const characters = text.split('');
  const angleStep = characters.length > 0 ? 360 / characters.length : 0;

  return (
    <div style={{ position: 'relative', width: `${radius * 2}px`, height: `${radius * 2}px` }}>
      {characters.map((char, index) => {
        const angle = index * angleStep;
        const x = radius + radius * Math.cos((angle * Math.PI) / 180);
        const y = radius + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <span
            key={index}
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: `${radius}px ${radius}px`,
              left: `${x+4}px`,
              top: `${y+13}px`,
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
