import { Header, About, Work, Skills, Contacts } from './container';
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
      {/* <Testimonial /> */}
      <Contacts />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
