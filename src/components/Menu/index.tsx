import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { MenuIconsProps } from '../../models/menu.model'
import LineDivider from '../LineDivider'
import { Container, Content, Item, ImgContent, Img, ImgText } from './styles'

interface IProps {
  images: MenuIconsProps[]
}

const Menu: React.FC<IProps> = ({ images }) => {
  return (
    <Container>
      <Content horizontal>
        {images.map(image => (
          <Item key={image.id} onPress={() => console.log('olá mundo')}>
            <ImgContent>
              <Img
                source={image.img}
                resizeMode="center"
                resizeMethod="resize"
              />
              <ImgText>{image.title}</ImgText>
            </ImgContent>
          </Item>
        ))}
      </Content>
    </Container>
  )
}

export default Menu
