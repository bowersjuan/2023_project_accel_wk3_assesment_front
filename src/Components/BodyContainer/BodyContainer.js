import "./BodyContainer.css";

export default function BodyContainer({ children, grid, center }) {
  let classNames = ["BodyContainer"];

  if (grid) {
    classNames.push("BodyContainer--grid");
    classNames.push("BodyContainer--overflow");
  } else if (center) {
    classNames.push("BodyContainer--center");
  }

  return <div className={classNames.join(" ")}>{children}</div>;
}
