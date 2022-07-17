import './Footer.css'

const Footer = () => {
    return (
        <footer class="text-center footer-style">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
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
                    <div class="col-md-4 ">
                        <h3>Social media</h3>
                        <ul class="list-inline">
                            <li>
                                <a target="_blank" href="#" ><img src="./images/facebook.png" class="btn-facebook" alt="Logo-Facebook" /></a>
                                <a target="_blank" href="#" class="btn-instagram"><img src="./images/instagram.png" class="btn-instagram" alt="Logo-Instagram" /></a>
                                <a target="_blank" href="#" class="btn-twitter"><img src="./images/twitter.png" class="btn-twitter" alt="Logo-Twitter" /></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-col">
                        <h3>About us</h3>
                        <p>The About Us page of your website is an essential source of information for all who want to know more about your business.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
