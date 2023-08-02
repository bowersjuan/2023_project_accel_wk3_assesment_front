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

const API = process.env.REACT_APP_API_URL;
const Route = "items";

function App() {
  const [items, setItems] = useState(null);
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
      <h1>Food App</h1>
      <div>{renderedContent}</div>
    </div>
  );
}

export default App;
