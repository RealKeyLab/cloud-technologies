import { Dashb } from "./components/DashboardLayout";
import styled from '@emotion/styled';
import { Graph } from "./containers/Graph/Graph";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export function App() {
  return <Cont><Dashb>
    <Graph />
  </Dashb></Cont>

}