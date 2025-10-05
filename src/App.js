
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, error, refetch } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <div className="App">
      <h1>React Custom Hook - useFetch</h1>
{/* 
      <button onClick={refetch}>Reload Data</button> */}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="products">
        {data &&
          data.slice(0, 6).map((item) => (
            <div key={item.id} className="card">
              <img src={item.images[0]} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
