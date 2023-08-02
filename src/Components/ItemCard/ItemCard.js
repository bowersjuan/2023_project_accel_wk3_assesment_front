export default function ItemCard({ item }) {
  console.log("ItemCard rendered");
  const { id, name, shortDescription, image, price, toppings } = item;

  return (
    <div className="ItemCard" key={id}>
      <div className="ItemCardTitle">
        <h2>{name}</h2>
      </div>
      <div className="ItemCardShortDescrip">
        <p>{shortDescription}</p>
      </div>
      <div className="ItemCardAvatar">
        <img width="100px" src={image} alt={name} />
      </div>
      <div className="ItemCardInfo">
        <p>Price: {price}</p>
        <p>Toppings: {toppings.join(", ")}</p>
      </div>
    </div>
  );
}
