function List() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <main>
      <ul className="compact-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

export default List;
