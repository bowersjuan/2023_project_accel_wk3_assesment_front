import ItemCard from "../ItemCard/ItemCard";

export default function ItemList({ data }) {
  return (
    <>
      {data.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </>
  );
}
