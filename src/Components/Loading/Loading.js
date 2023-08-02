import { Puff } from "react-loading-icons";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="Loading">
      <strong>Loading</strong>
      <Puff stroke="#fff" strokeOpacity={0.125} speed={0.7} />
    </div>
  );
}
