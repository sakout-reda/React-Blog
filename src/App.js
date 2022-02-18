import './App.css';
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
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{person.age}</p>
        <p>{person.name}</p>
        <p>{Math.random()}</p>
        <a href={link}>Google Site</a> */}
      </div>
    </div>
  );
}

export default App;