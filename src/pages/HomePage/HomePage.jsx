import { Carousel } from 'react-bootstrap'
import './HomePage.css'

const HomePage = () => {

    return (

        <Carousel fade>
            <Carousel.Item>
                <div className='pic-background' style={{ backgroundImage: 'url(https://res.cloudinary.com/dpsettvmg/image/upload/v1659013769/HomePage_lhkykh.jpg)' }}></div>

                <Carousel.Caption>
                    <h3 className="text-color">Resident Evil Village</h3>
                    <p>Set a few years after the horrifying events in the critically acclaimed
                        Resident Evil 7 biohazard, the all-new storyline begins with Ethan
                        Winters and his wife Mia living peacefully in a new location, free from
                        their past nightmares. Just as they are building their new life together,
                        tragedy befalls them once again.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='pic-background' style={{ backgroundImage: 'url(https://res.cloudinary.com/dpsettvmg/image/upload/v1659013774/slide2_oeihai.jpg)' }}></div>
                <Carousel.Caption>
                    <h3 className="text-color">The Last of Us part II</h3>
                    <p>Five years after their dangerous journey across the post-pandemic United States,
                        Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving
                        community of survivors has allowed them peace and stability, despite the constant
                        threat of the infected and other, more desperate survivors.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='pic-background' style={{ backgroundImage: 'url(https://res.cloudinary.com/dpsettvmg/image/upload/v1659014254/slide3_zw224k.jpg)' }}></div>

                <Carousel.Caption>
                    <h3 className="text-color">Assassin's Creed Valhalla</h3>
                    <p>
                        Embrace your destiny as Eivor. Discover and conquer the broken Kingdoms of England and grow your Viking legend.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default HomePage