import React, { useState } from "react";
import Homepage from "./pages/Homepage";

export const MediaQueryContext = React.createContext()

function App() {

  const breakPoint = `(min-width: 768px)`

  const [matches, setMatches] = useState(
    window.matchMedia(breakPoint).matches
  )

  return (
    <MediaQueryContext.Provider value={[matches, setMatches, breakPoint]}>
      <Homepage />
    </MediaQueryContext.Provider>
  );
}

export default App;
