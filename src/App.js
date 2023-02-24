import { Layout } from 'antd'
import Board, { moveCard } from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
import './App.css';
import { useState } from 'react';

const { Header, Content } = Layout

const initialBoard = {
  columns: [
    {
      id: 1,
      key: 'todo',
      title: 'To do',
      cards: [
        {
          id: 1,
          title: 'Add a Cart feature',
          description: 'The cart feature would do something'
        },
        {
          id: 5,
          title: 'Add a Preview feature',
          description: 'The preview feature would do something'
        },
      ]     
    },
    {
      id: 2,
      key: 'progress',
      title: 'In progress',
      cards: [
        {
          id: 2,
          title: 'Working on the add iteam feature',
          description: 'Good progress'
        },
        {
          id: 6,
          title: 'Working on the video feature',
          description: 'Good progress'
        },
        {
          id: 7,
          title: 'Working on the backend api',
          description: 'Good progress'
        },
      ]          
    },
    {
      id: 3,
      key: 'testing',
      title: 'Testing',
      cards: [
        {
          id: 3,
          title: 'Testing the upload file feature',
          description: 'So far so good'
        }
      ]          
    },
    {
      id: 4,
      key: 'complete',
      title: 'Complete',
      cards: [
        {
          id: 4,
          title: 'Released the update user feature',
          description: 'Done'
        },
        {
          id: 8,
          title: 'Released the download feature',
          description: 'Done'
        },
        {
          id: 9,
          title: 'Released the document page',
          description: 'Done'
        },
      ]          
    },
  ]
}

// #57D9A3
function App() {
  const [board, setBoard] = useState(initialBoard)

  function handleCardMove(_card, source, destination){
    const updateBord = moveCard(board, source, destination)
    setBoard(updateBord)
  }

  return (
    <Layout className='layout' style={{ background: 'linear-gradient(to right, #4286f4, #373B44)', padding: '40px' }}>
      <Header style={{ background: 'linear-gradient(to right, #4286f4, #373B44)' }}>
        <div style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: '1.4em' }}>Kaban Board @Dako Yu</div>
      </Header>

      <Content style={{ background: '#fff', borderRadius: '8px', marginBottom: '20px' }}>
        <div
          style={{
            padding: '40px 0 40px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Board onCardDragEnd={handleCardMove} disableColumnDrag>
            {board}
          </Board>
        </div>
      </Content>
    </Layout>

  );
}

export default App;
