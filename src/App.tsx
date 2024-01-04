import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-zinc-950">
        <Navbar />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
