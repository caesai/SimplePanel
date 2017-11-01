import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import configureStore from './store';

import SideBar from './components/SideBar';
import DetailedInfo from './components/DetailedInfo';

let store = configureStore({});

const actions = {
  getList: (departments) => ({
    type: 'GET_DEPARTMENTS_LIST',
    departments
  })
}

export default class App extends React.Component{
  componentDidMount() {
    return fetch('http://localhost:3000/departments', {
      method: 'get'
    })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let list = JSON.parse(response);
      store.dispatch(actions.getList(list));
    })
  }
  render() {
    return(
      <Provider store={store}>
        <div>
          <SideBar />
          <DetailedInfo />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App  />,
  document.getElementById('app')
);
