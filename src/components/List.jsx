import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

function List() {
  const [listVisible, setListVisible] = useState(true);
  const items = ['Caracas', 'Helios', 'Midde'];

  return (
    <main>
      <h2>Min Lista</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ToggleSwitch on={listVisible} setOn={setListVisible} />
        </div>
      {listVisible && (
        <ul className="compact-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default List;
