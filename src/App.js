import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Carousel from './components/Carousel'

function App() {
  return (
    <section className="app">
      <Header />
      <Search />
      <Carousel>
        
      </Carousel>
      <Footer />
    </section>
  );
}

export default App;
