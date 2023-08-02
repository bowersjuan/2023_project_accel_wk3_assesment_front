import "./BodyContainer.css";

export default function BodyContainer({ children, grid, overflow }) {
  let classNames = ["BodyContainer"];

  if (grid) {
    classNames.push("BodyContainer--grid");
  }

  if (overflow) {
    classNames.push("BodyContainer--overflow");
  }

  return <div className={classNames.join(" ")}>{children}</div>;
}
