import basketballimg from "../assets/basketball.jpg";

export const Basketball = () => {
  return (
    <>
      <h1 className="display-2 text-center"> Basketball News</h1>
      <div className="container">
        <img
          src={basketballimg}
          className="img-fluid"
          style={{
            width: "50%",
            height: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        />
      </div>
      <div className="container mt-3">
        <p>
        Home-and-away splits can provide some interesting context behind a
          team's record. It's not uncommon to see teams that tend to perform
          better in one setting or the other, though in this season in the NBA,
          there's a trend that's becoming harder to figure out. That's the
          dominance the Orlando Magic have shown when playing in front of their
          fans at Kia Center.</p> 
          
          <p>Entering Friday's action in the Emirates NBA Cup,
          the Magic boast a 7-6 overall record through the first 13 games of the
          season. However, when only analyzing their home record, the Magic have
          gone 6-0 while outscoring their opponents by an average of 17.0 points
          per game, including three wins by at least 20 points. In comparison,
          Orlando has won just one of seven contests on the road while suffering
          four losses by double digits. The Magic are one of three undefeated
          teams at home in the NBA with the Cavaliers and Lakers the other teams
          achieving this feat. The Magic are scoring just 107.4 points per game,
          which ranks 26th in the league and ahead of just four teams: the
          Portland Trail Blazers, the Utah Jazz, the Philadelphia 76ers and the
          New Orleans Pelicans. However, that figure rises to 113.2 points per
          game when playing at home. It's clear the scoring aspect of the game
          is not what's driving the Magic to success this season, but their
          defensive efficiency. The Magic rank first in the league in defense
          over the last 10 games, limiting opposing teams to shoot a
          league-worst 41.8% from the floor, including 35.4% from 3-point range.
          The Magic are taking their defense to heart, and it's enough to keep
          them undefeated at home.{" "}
        </p>
      </div>
    </>
  );
};
