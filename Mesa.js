import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function Mesa(){


    return(

        <View style={styles.container}>
       
        </View>
        

    );

};


const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        backgroundColor: 'red',
        margin: 30,
        borderRadius: 30,     
    },

    
    linhaVertical1: {
        position: 'absolute',
        height: '100%',
        width: 1,
        backgroundColor: 'gray',
        left: '30%',

    },

    linhaVertical2: {
        position: 'absolute',
        height: '100%',
        width: 1,
        backgroundColor: 'gray',
        right: '30%',

    },

    linhaHorizontal1:{
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        top: '30%',
    },

    linhaHorizontal2:{
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        bottom: '30%',


    }

});


/*

Componentes que estavem dentro do Return


<View style={styles.linhaVertical1} />
            <View style={styles.linhaVertical2} />
            <Quadrado/>

            <View style={styles.linhaHorizontal1} />
            <View style={styles.linhaHorizontal2} />


*/