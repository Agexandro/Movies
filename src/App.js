import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieProvider } from "./MovieContext";
import Add from './Add';


function App() {
  return (
    <div>
      <MovieProvider>
        <Add />
        <Nav />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
