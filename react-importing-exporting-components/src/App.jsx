import React from 'react'
import Converting from './components/Converting'
import Rules from './components/Rules'

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>React: Writing Markup with JSX — Demo</h1>
      <Converting />
      <hr style={{ margin: '24px 0' }} />
      <Rules />
    </div>
  )
}
