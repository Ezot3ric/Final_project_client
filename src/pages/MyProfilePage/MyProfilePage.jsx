import React from 'react'
import { useState } from 'react'
import userServices from '../../services/user.services'
import UserProfile from '../../components/UserProfile/UserProfile'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function MyProfilePage() {

  const [user, setUser] = useState({})

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    userServices
      .getUser()
      .then(({ data }) => {
        const { name, username, avatar, email, favorites, _id } = data
        setUser({ name, username, avatar, email, favorites, _id })
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Row>
        <Col>
          <UserProfile user={user} />
        </Col>
      </Row>
    </Container>

  )
}
