import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('luigi');
    const handleClick = () => {
        setName('Mario');
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;