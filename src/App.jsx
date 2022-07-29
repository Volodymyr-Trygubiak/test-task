import Header from './components/Header/Header'
import Main from './components/Main/Main';
import GetList from './components/GetList/GegList'

import './App.scss'


function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Main></Main>
        <GetList></GetList>
      </div>
    </>
  );
}

export default App;
