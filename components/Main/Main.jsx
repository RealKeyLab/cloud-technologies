import styled from '@emotion/styled'

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Main = ({ children }) => {
    return (
    
    
    <MainStyled>{children}</MainStyled>
    
    )
}

