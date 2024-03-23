import "./contact.css"

function Contact() {
  return (
    <>
    
        <div className="contact" id="sign-up">

          <section className="news-letter" id="News-letter">
            <div className="news ">
              <div className="container">
                <h1 className="news-heading">Subscribe To Get The Latest <br></br> News About Us</h1>
                <p className="des how-de">Get the Latest news about digital Marketing to Your Pocket, drop your <br></br> email below to
                  get daliy update about us</p>

                <form action="">
                  <input type="email" maxLength="50" required placeholder="Enter your email address"></input>
                  <button className="bt">Subscribe</button>

                </form>
              </div>
            </div>

          </section>

        </div>

    </>
  )
}

export default Contact