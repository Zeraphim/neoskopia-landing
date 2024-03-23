import "./cardstyles.scss"

function Cards() {

  return (
    <>

    <div className="cardsDiv">

        <div className="head">
            <span>THE OPPORTUNITY</span>
            <p>Become a part of an ever-growing community of innovators.</p>
        </div>

        <div className="mainDiv">

            <div className="l-container">
            <div className="b-game-card">
                <div className="b-game-card__cover" style={{backgroundImage: "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg)"}}></div>
            </div>
            <div className="b-game-card">
                <div className="b-game-card__cover" style={{backgroundImage: "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg)"}}></div>
            </div>
            <div className="b-game-card">
                <div className="b-game-card__cover" style={{backgroundImage: "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg)"}}></div>
            </div>
            <div className="b-game-card">
                <div className="b-game-card__cover" style={{backgroundImage: "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg)"}}></div>
            </div>
            </div>

        </div>

    </div>

    </>
  )
}

export default Cards