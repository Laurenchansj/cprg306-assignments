import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-blue-100 pt-2 pb-2">
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <ul>
          <ItemList />
        </ul>
      </div>
    </main>
  );
}
