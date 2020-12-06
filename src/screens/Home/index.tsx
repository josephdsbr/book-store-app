import React from 'react'
import { Container } from './styles'
import { icons } from '../../constants'
import UserInfo from '../../components/UserInfo'
import Menu from '../../components/Menu'
import { MenuIconsProps } from '../../models/menu.model'

const Home: React.FC = () => {
  const profileData = {
    name: 'José Vinícius',
    point: 200
  }

  const images: MenuIconsProps[] = [
    { id: 1, img: icons.claim_icon, title: 'Claims' },
    { id: 2, img: icons.point_icon, title: 'Get Point' },
    { id: 3, img: icons.card_icon, title: 'My Card' }
  ]

  return (
    <Container>
      <UserInfo
        icon={icons.plus_icon}
        name={profileData.name}
        points={profileData.point}
      />
      <Menu images={images} />
    </Container>
  )
}

export default Home
