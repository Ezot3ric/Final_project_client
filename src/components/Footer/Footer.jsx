import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center footer-style">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Know us</h3>
                        <p>
                            Legal & Privacy
                            User Agreement
                            Privacy & Cookie Policy (Your Privacy Rights)
                            Online Service Updates
                            Security
                            YouTube Terms of Service
                            Google Privacy Policy
                            Sus preferencias de cookies
                            © 2022 You got it man. <br />

                        </p>
                    </div>
                    <div className="col-md-4 ">
                        <h3>Social media</h3>
                        <ul className="list-inline">
                            <li>
                                <a target="_blank" href="#" ><img src="./images/facebook.png" className="btn-facebook" alt="Logo-Facebook" /></a>
                                <a target="_blank" href="#" className="btn-instagram"><img src="./images/instagram.png" className="btn-instagram" alt="Logo-Instagram" /></a>
                                <a target="_blank" href="#" className="btn-twitter"><img src="./images/twitter.png" className="btn-twitter" alt="Logo-Twitter" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-col">
                        <h3>About us</h3>
                        <p>The About Us page of your website is an essential source of information for all who want to know more about your business.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
