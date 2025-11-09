import React from 'react'

export default function Rules() {
  return (
    <section>
      <h2>The Rules of JSX</h2>
      <ol>
        <li><strong>Return a single root element:</strong> wrap multiple elements in a single parent (e.g. <code>&lt;div&gt;</code> or Fragment <code>&lt;&gt;&lt;/&gt;</code>).</li>
        <li><strong>Close all tags:</strong> self-closing tags like <code>&lt;img /&gt;</code> or <code>&lt;br /&gt;</code> must be closed.</li>
        <li><strong>Use camelCase for attribute names:</strong> e.g. <code>onClick</code>, <code>strokeWidth</code>, <code>tabIndex</code>. Use <code>className</code> instead of <code>class</code>.</li>
        <li><strong>JSX expressions:</strong> embed JS with curly braces: <code>&lt;div&gt;{name}&lt;/div&gt;</code>.</li>
      </ol>

      <p>Example of camelCase and expressions:</p>
      <pre style={{ background:'#f6f6f6', padding:12 }}>
{`const isDone = false;
return (
  <div className="todoItem">
    <input type="checkbox" checked={isDone} onChange={() => {}} />
    <label style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Buy batteries</label>
  </div>
);`}
      </pre>

      <p>React will show helpful on-screen errors if JSX rules are violated — read them, they’re usually explicit.</p>
    </section>
  )
}
