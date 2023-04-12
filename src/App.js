import Homepage from "./pages/Homepage";

export const theme = {
  color: {
    white: '#fdffe0',
    black: '#313639',
    red: '#E31B23',
    darkGreen: '#455946',
    green: '#5C7346',
    sand: '#BFA454',
    yellow: '#FCCC6C',
    brown: '#3C3A40',
    metallicSeaweed: '#2B8091',
  },
  font: {
    primary: 'The Wild Breath of Zelda'
  }
}

function App() {
  return (
    <Homepage />
  );
}

export default App;
