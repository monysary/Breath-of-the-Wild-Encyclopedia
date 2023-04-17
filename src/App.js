import React, { useState } from "react";
import Homepage from "./pages/Homepage";

export const Context = React.createContext()

function App() {

  const breakPoint = `(min-width: 768px)`

  const [matches, setMatches] = useState(
    window.matchMedia(breakPoint).matches
  )

  return (
    <Context.Provider value={[matches, setMatches, breakPoint]}>
      <Homepage />
    </Context.Provider>
  );
}

export default App;
