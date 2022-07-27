import { Carousel } from 'react-bootstrap'
import './HomePage.css'

const HomePage = () => {

    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/HomePage.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Resident Evil Village</h3>
                    <p>Set a few years after the horrifying events in the critically acclaimed
                        Resident Evil 7 biohazard, the all-new storyline begins with Ethan
                        Winters and his wife Mia living peacefully in a new location, free from
                        their past nightmares. Just as they are building their new life together,
                        tragedy befalls them once again.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/slide2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>The Last of Us part II</h3>
                    <p>Five years after their dangerous journey across the post-pandemic United States,
                        Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving
                        community of survivors has allowed them peace and stability, despite the constant
                        threat of the infected and other, more desperate survivors.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                
                <img
                    className="d-block w-100"
                    src="./images/slide3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Rend: Prologue</h3>
                    <p>
                        A Horror Mystery set in a house filled with cryptic history. Search for notes and engage
                        in the mystery of this house.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomePage