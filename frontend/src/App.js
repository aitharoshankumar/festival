import { useEffect, useState } from "react";

function App() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    fetch("http://54.196.229.34:5000/api/festivals")
      .then((res) => res.json())
      .then((data) => setFestivals(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top 10 Indian Festivals</h1>

      {festivals.map((festival, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h3>
            {festival.name} – {festival.date}
          </h3>
          <p>{festival.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
