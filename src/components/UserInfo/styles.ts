import { Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  height: 15%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5%;
`

export const AccountInfo = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const AccountText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  line-height: 27;
`

export const Name = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const PointContainer = styled(TouchableOpacity)`
  background-color: ${props => props.theme.colors.primary};
  max-height: 60%;
  height: 100%;
  border-radius: 20px;
  min-width: 20%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  padding: 3%;
`

export const PointIcon = styled.Image`
  width: 10%;
  aspect-ratio: 0.8;
`

export const PointName = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`
