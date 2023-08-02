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
    <Error error={error} />,
    <ItemList data={items} />
  );

  useEffect(() => {
    try {
      fetchData(API, Route, setLoading, setError, setItems);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  return (
    <div className="App">
      <h1>Our menu</h1>
      <BodyContainer
        grid={Boolean(items.length !== 0 && !loading && !error)}
        center={Boolean(loading || error)}>
        {renderedContent}
      </BodyContainer>
    </div>
  );
}

export default App;
