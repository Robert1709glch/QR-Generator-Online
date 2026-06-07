import Header from './components/Header'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <footer className="footer">
        <p>© 2026 Mi App de QR — Hecho con ❤️</p>
      </footer>
    </div>
  )
}

export default App
