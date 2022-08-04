import Header from './components/Header/Header'
import Main from './components/Main/Main';
import GetList from './components/UsersList/UsersList'
import SignUpForm from './components/SignUpForm/SignUpForm';

import './App.scss'
import { StateContextProvider } from './context';


function App() {
  return (
    <>
      <StateContextProvider>
        <Header></Header>
        <div className="container">
          <Main></Main>
          <GetList></GetList>
          <SignUpForm></SignUpForm>
        </div>
      </StateContextProvider>
    </>
  );
}

export default App;
