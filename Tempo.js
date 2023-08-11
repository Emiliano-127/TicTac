import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Tempo(){
    return(

        <View style={styles.container}>
            <Text style={styles.texto}>0:05</Text>

        </View>
    );
};

const styles = StyleSheet.create({

    container:{
        flex: 0.10,
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',

    },

    texto:{
        fontSize: 24,
    },

});