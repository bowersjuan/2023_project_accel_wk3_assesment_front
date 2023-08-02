// Imports
import { useEffect, useState } from "react";
import "./App.css";

// Components
import Error from "./Components/Error/Error";
import Loading from "./Components/Loading/Loading";
import ItemList from "./Components/ItemList/ItemList";

// Helpers
import renderContent from "./Helpers/renderContent";
import fetchData from "./Helpers/fetchData";
import BodyContainer from "./Components/BodyContainer/BodyContainer";

const API = process.env.REACT_APP_API_URL;
const Route = "items";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const renderedContent = renderContent(
    loading,
    <Loading />,
    error,
    <Error />,
    <ItemList data={items} />
  );

  useEffect(() => {
    console.log("useEffect fires");
    fetchData(API, Route, setLoading, setError, setItems);
  }, []);

  console.log("App renders");
  return (
    <div className="App">
      <h1>Our menu</h1>
      <BodyContainer grid={Boolean(items.length !== 0)} overflow={Boolean(items.length !== 0)}>
        {renderedContent}
      </BodyContainer>
    </div>
  );
}

export default App;
