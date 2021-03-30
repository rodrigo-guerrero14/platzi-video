import useInitialState from './hooks/useInitialState'
import './assets/styles/App.scss';

import Header from './components/Header'
import Search from './components/Search'
import Categories from './components/Categories'
import Carousel from './components/Carousel'
import CarouselItem from './components/CarouselItem'
import Footer from './components/Footer'

function App() {

  const {videos, setVideos} = useInitialState()
  const { initialState } = videos

  const handleClick = ()=>{
    
  }

  return (
    <section className="app">
      <Header />
      <Search />

      <Categories title="Playlist de Karen">
        <Carousel>
          {initialState.mylist?.lenght > 0 &&
            <CarouselItem cover="" title="" year="" contentRating="" duration="" />
          }
        </Carousel>
      </Categories>

      <Categories title="Trending">
        <Carousel>
          {
            initialState.trends.map(item => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title="Playlist de Pepo">
        <Carousel>
          {
            initialState.originals.map(item => <CarouselItem key={item.id} {...item}/>)
          }
        </Carousel>
      </Categories>

      <Footer />
    </section>
  );
}

export default App;