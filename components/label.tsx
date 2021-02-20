import styled from '@emotion/styled'

export const Label = ({ children }) => {
  return <Text>{children}</Text>
}

const Text = styled.div`
  font-size: 44px;
  text-align: center;
`
