const Home = () => {

    const handleClick = (e) =>{
        console.log('Hello World\n', e.target);
    }
    const handleClickMeAgain =(name) =>{
        console.log('Hello Mr. '+ name);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=> handleClickMeAgain('Mario')}>Click Me Again</button>
        </div>
    );
}

export default Home;