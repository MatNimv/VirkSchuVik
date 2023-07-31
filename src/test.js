import './App.css';

function Tepp() {
    const title = "välkommen din skit";
    const likes = 50;

  return (
    <div className="test">
        <h3>{title}</h3>
        <p>Liked: {likes} times</p>

        <a href="www.matildanimvik.se">Min sida</a>
    </div> 
  );
}

export default Tepp;
