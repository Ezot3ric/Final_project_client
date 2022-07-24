import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import MyProfileForm from '../../components/MyProfileForm/MyProfileForm'

const MyProfileFormPage = () => {

    const navigate = useNavigate()
    return (

        <Container>

            <MyProfileForm />

        </Container>

    )
}

export default MyProfileFormPage