import ItemCard from "../ItemCard/ItemCard";

export default function ItemList({ data }) {
  return (
    <div className="ItemList">
      {data.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
}
