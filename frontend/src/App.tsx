import { useState } from 'react'
import './App.css'

function App() {
  const [health, setHealth] = useState('nothing yet');
  const [loading, setLoading] = useState(false);
  return (
    <>
      <p>{ loading ? 'Loading...' : health}</p>
      <button onClick={async () => {
        setLoading(true);
        const body = await checkHealth();
        setHealth(`${JSON.stringify(body, null, 2)}`);
        setLoading(false);
      }}>Load</button>
      <p>API URL: {import.meta.env.VITE_API_URL}</p>
    </>
  )
}

async function checkHealth() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/health`);
  const body = await response.json();
  return body
}

export default App
