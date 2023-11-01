export default function Item({ item, onSelect }) {
  // const onClickHandler = () => {
  //   onSelect(item.name);
  // };

  return (
    <li className="p-2 m-4 bg-blue-50 max-w-sm">
      <h2 className="text-xl font-bold" onClick={onSelect}>
        {item.name}
      </h2>
      <div className="text=sm">
        Buy {item.quantity} in {item.category}
      </div>
    </li>
  );
}
