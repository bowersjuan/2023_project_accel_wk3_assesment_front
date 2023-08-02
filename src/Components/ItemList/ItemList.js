export default function ItemList({ data }) {
  console.log("itemList renders");
  return (
    <div className="ItemsList">
      <ul>
        {data?.map((datum) => {
          return (
            <li key={datum.uid || datum.id}>Item #: {datum.uid || datum.id}</li>
          );
        })}
      </ul>
    </div>
  );
}
