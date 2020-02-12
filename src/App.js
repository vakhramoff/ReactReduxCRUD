import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import TodoList from "./components/todos/TodoList";
import EditTodo from "./components/todos/EditTodo";
import AddTodo from "./components/todos/AddTodo";
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="КОНТАКТЫ" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/todos/:id" component={TodoList} />
                <Route exact path="/contact/todos/:userId/edit/:id" component={EditTodo} />
                <Route exact path="/contact/todos/:id/add" component={AddTodo} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
