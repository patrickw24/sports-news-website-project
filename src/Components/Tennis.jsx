import tennisimg from '../assets/tennis.webp'


export const Tennis = ()=>{

    return(
        <>
        <h1 className='display-2 text-center'>Tennis News</h1>
        <img src={tennisimg} className="img-fluid" style={{
            width: "50%",
            height: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}></img>
        
        <div className="container mt-3">
        <p>Coco Gauff opened the 2024 season with the title in Auckland.

And while there were ups-and-downs along the way, she finished the season just as she started, with another victory, by winning the WTA Finals at the year-end event in Riyadh, Saudi Arabia, on Saturday.</p>

<p>It was a statement-making run for Gauff throughout the week, as she defeated the world's top two ranked players, Aryna Sabalenka and Iga Swiatek, in the semifinals and in group play, respectively. Gauff then recorded a gutsy comeback performance against reigning Olympic champion Zheng Qinwen in the over-three-hour final for a 3-6, 6-4, 7-6 (2) win.

Gauff, the 2023 US Open champion, trailed 5-3 in the decider and was two points away from being the runner-up before she stormed back. She won the first six points of the tiebreak and then cemented her champion status on her third match point. </p>
</div>
        </>
    )
}