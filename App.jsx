import { Dashb } from "./components/DashboardLayout";
import styled from '@emotion/styled';


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export function App() {
  return <Cont><Dashb>
    App The Main
  </Dashb></Cont>

}