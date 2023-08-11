import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagens from './Imagens';
import Contador from './Contador';


export default function Placar(){
    return(
        <View style= {styles.box}>

        <Contador/>
        <Imagens />
        <Contador/>

        </View>
    );
};

const styles =  StyleSheet.create({

    box:{

        flex: 0.10,
        width: 300,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius:30,

    },

});