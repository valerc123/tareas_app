import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

function Header(props)
{
    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
          
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 35
    }
})

export default Header;