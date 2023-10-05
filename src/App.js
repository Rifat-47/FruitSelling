
import './App.scss';
import ItemList from './components/ItemList';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-container'>
        <div className='div1'></div>
        <ItemList />
        <div className='div3'></div>
      </div>
    </div>
  );
}

export default App;
