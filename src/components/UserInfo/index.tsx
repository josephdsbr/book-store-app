import React from 'react'
import { ImageSourcePropType } from 'react-native'

import {
  AccountInfo,
  AccountText,
  Container,
  Name,
  PointContainer,
  PointIcon,
  PointName
} from './styles'

interface IProps {
  name: string
  icon: ImageSourcePropType
  points: number
}

const UserInfo: React.FC<IProps> = ({ icon, name, points }) => {
  return (
    <Container>
      <AccountInfo>
        <AccountText>Good Morning</AccountText>
        <Name>{name}</Name>
      </AccountInfo>
      <PointContainer>
        <PointIcon source={icon} />
        <PointName>{points} point</PointName>
      </PointContainer>
    </Container>
  )
}

export default UserInfo
