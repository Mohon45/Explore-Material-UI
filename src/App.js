import { Button } from '@mui/material';
import './App.css';
import Newspaper from './containers/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Add to cart</Button>
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
