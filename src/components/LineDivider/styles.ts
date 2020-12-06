import styled from 'styled-components/native'

export const Container = styled.View`
  width: 1px;
  padding: 0 18px;
`

export const Line = styled.View`
  flex: 1;
  border-left-color: ${props => props.theme.colors.lightGray};
  border-left-width: 1px;
`
