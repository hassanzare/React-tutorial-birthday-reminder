import React from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = React.useState(data);

  return (
    <main>
      <section className="container">
        <h3> {people.length} birthday today</h3>
        <List people={people} />
        <button className="btn-clear" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
