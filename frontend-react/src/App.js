import { About, Footer, Skills, Work, Testimonial } from './container';
import Header from './container/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
