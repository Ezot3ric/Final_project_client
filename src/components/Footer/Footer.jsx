import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <MDBFooter className='text-center text-white' style={{ backgroundColor: '#E5DFCC' }}>
                    <MDBContainer className='pt-4'>
                        <section className='mb-4'>
                            <a
                                className='btn btn-link btn-floating btn-lg text-dark m-1'
                                href='https://es-es.facebook.com/Blizzard/'
                                role='button'
                                data-mdb-ripple-color='dark'
                            >
                                <MDBIcon fab className='fab fa-facebook-f' />
                            </a>

                            <a
                                className='btn btn-link btn-floating btn-lg text-dark m-1'
                                href='https://www.google.com/'
                                role='button'
                                data-mdb-ripple-color='dark'
                            >
                                <MDBIcon fab className='fa-google' />
                            </a>

                            <a
                                className='btn btn-link btn-floating btn-lg text-dark m-1'
                                href='https://www.instagram.com/insidegamers/?hl=es'
                                role='button'
                                data-mdb-ripple-color='dark'
                            >
                                <MDBIcon fab className='fa-instagram' />
                            </a>

                            <a
                                className='btn btn-link btn-floating btn-lg text-dark m-1'
                                href='https://www.linkedin.com/feed/'
                                role='button'
                                data-mdb-ripple-color='dark'
                            >
                                <MDBIcon fab className='fa-linkedin' />
                            </a>

                            <a
                                className='btn btn-link btn-floating btn-lg text-dark m-1'
                                href='https://github.com/Ezot3ric/Final_project_client'
                                role='button'
                                data-mdb-ripple-color='dark'
                            >
                                <MDBIcon fab className='fa-github' />
                            </a>
                        </section>
                    </MDBContainer>

                    <div className='text-center text-dark p-3' style={{ backgroundColor: '#D5D1C4' }}>
                        © 2020 Copyright:
                        <a className='text-dark' href='https://mdbootstrap.com/'>
                            YouGotItMan.com
                        </a>
                    </div>
                </MDBFooter>
            </div>
        </>
    )
}

export default Footer
