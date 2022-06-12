import React, { useEffect } from 'react';
import './App.css';
import Content from './components/Content'
import { useGif } from './context/GifContext';
import Layout from './layout/default';

function App() {
  const { fetchGifs } = useGif();

  useEffect (() => {
    async function fetchContent() {
      try {
        await fetchGifs({endpoint: 'trending', limit: 12});
      } catch (error) {
        console.error(error)
      }
    }
    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
