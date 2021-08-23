import './App.css';
import Header from './components/Header';
import Tindercards from './components/Tinder-cards';
import SwipeButton from './components/SwipeButton'
function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* tinder-cards */}
      <Tindercards />
      {/* swipe */}
      <SwipeButton />
    </div>
  );
}

export default App;
