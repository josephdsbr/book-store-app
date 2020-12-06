import { Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import LineDivider from '../LineDivider'

export const Container = styled.SafeAreaView`
  padding: ${props => props.theme.sizes.padding};
  height: 15%;
`

export const Content = styled.ScrollView`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.sizes.radius};
  height: 100%;
`

export const Item = styled(TouchableOpacity)`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  flex: 1;
`
export const ImgContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const Img = styled(Image)`
  width: 20%;
  aspect-ratio: 1;
`

export const ImgText = styled.Text.attrs(() => ({
  numberOfLines: 1
}))`
  margin-left: ${props => props.theme.sizes.base};
  font-size: ${props => props.theme.sizes.body3};
  color: ${props => props.theme.colors.white};
`

export const Line = styled(LineDivider)`
  &:first-child {
    display: none;
    width: 0;
    padding: 0;
  }
`
