import Navbar from './Navbar';
import Home from './Home';


function App() {
/*   const title = 'My Awesome Project';
  const likes = 50;
  const person = {name: 'Reda', age:25};
  const link = 'https://www.google.com'; */
  return (
    <div className="App">
      <Navbar/>

      <div className="content">
      <Home/>
      </div>
    </div>
  );
}

export default App;