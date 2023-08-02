import "./ItemCard.css";

export default function ItemCard({ item }) {
  const { id, name, shortDescription, image, price, toppings } = item;
  let priceInDollars = price.toFixed(2);

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
        <p>Price: ${priceInDollars}</p>
        {toppings.length !== 0 && <p>Toppings: {toppings.join(", ")}</p>}
      </div>
    </div>
  );
}
