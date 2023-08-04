import "./ItemCard.css";

export default function ItemCard({ item }) {
  const { id, name, shortDescription, image, price, toppings } = item;
  let priceInDollars = price.toFixed(2);

  return (
    <div className="ItemCard" key={id}>
      <div className="ItemCardTitle">
        <h2>{name}</h2>
        <p>" {shortDescription} "</p>
      </div>
      <div className="ItemCardAvatar">
        <img width="150px" src={image} alt={name} />
      </div>
      <div className="ItemCardInfo">
        <p>
          Price - <span id="ItemPrice">${priceInDollars}</span>
        </p>
        {toppings.length !== 0 && (
          <p>
            Toppings
            <br />
            <span id="ItemToppings">{toppings.join(", ")}</span>
          </p>
        )}
      </div>
    </div>
  );
}
