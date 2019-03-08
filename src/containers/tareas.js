import React, { Component } from 'react';
import { View, FlatList, Button, Text} from 'react-native';
import uuid from 'uuid';


class ListaTareas extends Component {

    state = {
        tareas : [
            {titulo: 'hooks', dia: 'lunes', hora: '5:00',fecha: '8 marzo 2019',id: uuid() },
            {titulo: 'redux',dia: 'martes',hora:'6:00',fecha:'9 marzo 2019',id: uuid()},
            {titulo: 'navigatio', dia: 'miercoles',hora:'7:00',fecha:'10 marzo 2019',id: uuid()},
            {titulo: 'fundamentsJS', dia: 'jueves',hora:'8:00',fecha:'11 marzo 2019',id: uuid()},
            {titulo:  'native', dia: 'viernes',hora:'9:00',fecha:'12 marzo 2019',id: uuid()}
        ],
       tarea: null,
       tareasHechas : []
    }

    crearTearea = () => {
        let nuevasTareas = this.state.tareas
        let tarea = nuevasTareas.pop()
        this.setState({
            tareas: nuevasTareas,
            tarea: tarea,
        }, () => {
            this.setState({
                tareasHechas: [...this.state.tareasHechas, this.state.tarea]
            })
        })
    }

    keyExtractor = item => item.id.toString()    

    renderItem = ({item}) => {
        return(
            <View>
                <Text>{item.dia}</Text>
            </View>
        )
    }

    render(){
        return(
            <View>
                <Button title={this.state.tarea ? this.state.tarea.titulo : 'Empezar'} onPress={this.crearTearea}/>
                <View>
                    <FlatList data={this.state.tareasHechas } renderItem={this.renderItem} keyExtractor={this.keyExtractor}/>
                </View>
            </View>
            
        )
    }
}


  

export default ListaTareas