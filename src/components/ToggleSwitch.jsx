function ToggleSwitch({ on, setOn }) {
  return (
    <div
      onClick={() => setOn(!on)}
      style={{
        width: 60,
        height: 30,
        borderRadius: 15,
        background: on ? '#02C39A' : '#ccc',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: '50%',
          background: 'white',
          position: 'absolute',
          top: 2,
          left: on ? 32 : 2,
          transition: 'left 0.3s',
        }}
      />
    </div>
  );
}

export default ToggleSwitch;
