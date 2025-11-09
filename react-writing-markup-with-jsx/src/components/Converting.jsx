import React from 'react'

export default function Converting() {
  // Example: original HTML vs converted JSX
  return (
    <section>
      <h2>Converting HTML to JSX</h2>

      <p><strong>Original HTML (valid HTML):</strong></p>
      <pre style={{ background:'#f6f6f6', padding:12 }}>
{`<h1>Hedy Lamarr's Todos</h1>
<img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo">
<ul>
  <li>Invent new traffic lights</li>
  <li>Rehearse a movie scene</li>
  <li>Improve the spectrum technology</li>
</ul>`}
      </pre>

      <p><strong>Converted JSX:</strong></p>
      <pre style={{ background:'#f6f6f6', padding:12 }}>
{`return (
  <>
    <h1>Hedy Lamarr's Todos</h1>
    <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>
  </>
)` }
      </pre>

      <p>
        Notes:
        <ul>
          <li>JSX requires a single root element — the example above uses a Fragment (<>&hellip;</>).</li>
          <li>Self-closing tags must end with <code>/&gt;</code> (e.g. <code>&lt;img /&gt;</code>).</li>
          <li>HTML attributes like <code>class</code> become <code>className</code> in JSX.</li>
        </ul>
      </p>

      <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" style={{ width:120, borderRadius:8 }} />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
      </div>
    </section>
  )
}
