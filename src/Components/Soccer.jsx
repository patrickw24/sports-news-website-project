import soccerimg from '../assets/soccer.jpg'



export const Soccer = ()=>{

    return(
        <>
        <h1 className='display-2 text-center'>Soccer News</h1>
        <img src={soccerimg} style={{
            width: "50%",
            height: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          className="img-fluid"></img>

<div className="container mt-3">
          <p>Argentina coach Lionel Scaloni is confident there will be Lionel Messi jerseys in the home section despite the Paraguayan Football Association's (APF) ban on rival shirts ahead of Thursday's South American World Cup 2026 qualifier.

Argentina will play Paraguay at the Defensores del Chaco stadium in Asuncion on Thursday, and APF manager Fernando Villasboa warned the home crowd to wear only Paraguayan shirts as no jerseys from Argentina, Argentine clubs or clubs that contain the names of players from other countries will be allowed.</p>

<p>"We won't allow the other team's shirt. It's not a problem against Messi. We respect the careers of all footballers. It's just that the home ground is very important to us," Villasboa told a news conference on Wednesday.

Paraguay coach Gustavo Alfaro said: "I have nothing to do with the T-shirt ban. I had no idea about that. I think the idea is to reduce the margin of a possible source of conflict."

"Messi is our rival tomorrow, I wish him the best game of his life against Peru, but not tomorrow," he added.</p>
</div>
        </>
    )
}