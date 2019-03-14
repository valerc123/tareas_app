import React, { Component } from 'react';
import { View, FlatList, Button, Text, StyleSheet} from 'react-native';
import uuid from 'uuid';

class ListaTareas extends Component {

    state = {
        tareas : [
            {titulo: 'Hooks', dia: 'lunes', hora: '5:00',fecha: '8 marzo 2019',id: uuid() },
            {titulo: 'Redux',dia: 'martes',hora:'6:00',fecha:'9 marzo 2019',id: uuid() },
            {titulo: 'Navigation', dia: 'miercoles',hora:'7:00',fecha:'10 marzo 2019', id: uuid() },
            {titulo: 'Fundamentos JS', dia: 'jueves',hora:'8:00',fecha:'11 marzo 2019', id: uuid() },
            {titulo: 'React Native', dia: 'viernes',hora:'9:00',fecha:'12 marzo 2019', id: uuid() }
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
            if(this.state.tareas.length > 0 ){
                this.setState(prevState => ({
                    tareasHechas: [...prevState.tareasHechas, tarea]
                }))
            }else if (this.state.tareas.length === 0){ 
                this.setState(prevState => ({
                    tareasHechas: [...prevState.tareasHechas, tarea]
                }))
            }
            else{
                this.setState({tareasHechas: []})
            }
        })
        console.log("tareas hechas" +this.state.tareasHechas.length, "tareas "+this.state.tareas.length, "  crearTearea")
    }

    keyExtractor = item => item.id.toString()    

    renderItem = ({item}) => {
        return(
            <View style={styles.container}>
                <Text style={styles.tarea}>{item.titulo}</Text>
                <Text style={styles.item}>Dia: {item.dia}</Text>
                <Text style={styles.item}>Hora: {item.hora}</Text>
                <Text style={styles.item}>Fecha: {item.fecha}</Text>
            </View>
        )
    }

    listEmpty = () => {
        return (
            <View style={styles.empty}>
                <Text style={styles.tarea}> No hay tareas </Text>
            </View>
        )
    }

    render(){
        const { tareasHechas, tareas } = this.state

        console.log(tareasHechas.length, tareas.length, "render")

        return(
            <View>
                <Button 
                    title={ tareas.length >= 1 ? tareas[tareas.length-1].titulo : 'Tareas Finalizadas'} 
                    onPress={this.crearTearea}
                    disabled={tareas.length < 1 ? true : false}/>
                    
                <View>
                    <FlatList 
                    data={tareasHechas.length > 0 && tareasHechas }  
                    renderItem={this.renderItem} 
                    keyExtractor={this.keyExtractor}
                    ListEmptyComponent={this.listEmpty}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 30,
        margin: 8,
        backgroundColor: '#f2f2f2',
    },
    tarea:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    item:{
        fontSize: 16,
    },
    empty:{
        padding: 30,
        margin: 8,
        backgroundColor: '#F4462C',
    }
})

export default ListaTareas