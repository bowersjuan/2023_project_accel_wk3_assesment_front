import ItemCard from "../ItemCard/ItemCard";

export default function ItemList({ data }) {
  console.log("itemList renders");
  return (
    <div className="ItemsList">
      {data.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
}
