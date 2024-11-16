import sportsimg from '../assets/sports.jpg'


export const HomePage = () => {
  return (<>
        <h1 className="text-center">Sports News</h1>
        <img
          src={sportsimg}
          className="img-fluid"
          style={{
            width: "50%",
            height: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        />
    
        <div className="container mt-3">
        <p className="text-center">Your ultimate destination for all things sports! Whether you're a fan of basketball, tennis, or soccer, we bring you the latest updates, highlights, and in-depth analysis from the world of sports. Stay tuned for breaking news, player updates, and game results — everything you need to keep up with your favorite teams and athletes!</p>
        </div>
  
  
  </>);
};
