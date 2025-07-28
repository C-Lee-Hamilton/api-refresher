import "../styles/Hero.css";

function Hero({ random }) {
  return (
    <div className="hero-body">
      <div className="hero-content">
        <h1> Hungry?</h1>
        <h2> Take a chance or search your favorites.</h2>
        <button onClick={random}>Random Recipe</button>
      </div>
    </div>
  );
}

export default Hero;
