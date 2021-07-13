import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddNote from './components/AddNote';
import NavBar from './components/NavBar';
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={NotesList} />
            <Route path="/add" component={AddNote} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
