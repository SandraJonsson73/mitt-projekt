import { useState } from 'react';
function ClickButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Klicka Här
      </button>
      <p>Antal klick: {count}</p>
    </div>
  );
}
export default ClickButton;