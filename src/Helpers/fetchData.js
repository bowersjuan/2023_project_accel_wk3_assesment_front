const fetchData = async (API, Route, loader, error, setData) => {
  try {
    error("");
    loader(true);

    const response = await fetch(`${API}/${Route}`);
    const json = await response.json();
    const { data, error: responseError } = json;

    if (response.ok) {
      setData(data);
      loader(false);
    } else {
      error(responseError);
      loader(false);
    }
  } catch (err) {
    error(err.message);
    loader(false);
  }
};

export default fetchData;
