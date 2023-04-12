import Homepage from "./pages/Homepage";

export const theme = {
  color: {
    white: '#F5FAFF',
    black: '#313639',
    darkGreen: '#455946',
    green: '#5C7346',
    sand: '#BFA454',
    yellow: '#FCCC6C',
    brown: '#BF7E04',
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
