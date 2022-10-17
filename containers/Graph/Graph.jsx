import styled from '@emotion/styled';
import { useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, applyEdgeChanges,applyNodeChanges, addEdge, } from 'reactflow';
import 'reactflow/dist/style.css';

const edge = [];

const node = [
    {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'input',
    },
    {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
    },
    {
        id: '3',
        data: { label: 'World' },
        position: { x: 150, y: 150 },
    },
    {
        id: '4',
        data: { label: 'World' },
        position: { x: 200, y: 200 },
    },
];



export function Graph() {
    const [nodes, setNodes] = useState(node);
    const [edges, setEdges] = useState(edge);
  
    const onNodesChange = useCallback(
      (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
      []
    );
    const onEdgesChange = useCallback(
      (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      []
    );

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  
    return (
        <Container>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Background />
          <Controls />
        </ReactFlow>
        </Container>
    );
  }
  
const Container = styled.section`
    width: 100%;
    height: 100%;
`;

