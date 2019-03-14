
import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import Header from './src/components/header';
import Tareas from './src/containers/tareas';
import Home from './src/screen/home';

export default class App extends Component {

  state = {
    work:[],
    titulo: " ",
  }


  render() {
    return (
      <Home>
        <Header title="Tablero de tareas"/>
        <ScrollView>
          <Tareas/>
        </ScrollView>
      </Home>
    );
  }
}

