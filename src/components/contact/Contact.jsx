import "./contact.css"

function Contact() {
  return (
    <>
    
        <div className="contact" id="sign-up">

          <section className="news-letter" id="News-letter">
            <div className="news ">
              <div className="contact_container">
                <h1 className="news-heading">Subscribe Now</h1>
                <p className="des how-de">Stay updated on the latest news and events.</p>

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