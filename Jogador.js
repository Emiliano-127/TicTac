import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Jogador(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Vez: Jogador 1</Text>

        </View>
    );
};


const styles = StyleSheet.create({

    container:{
        flex: 0.10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: 300,

    },

    texto:{
        fontSize: 24,
    }



});