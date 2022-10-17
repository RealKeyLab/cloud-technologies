import styled from '@emotion/styled'
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

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






