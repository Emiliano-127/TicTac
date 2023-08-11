import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';



export default function Imagens(){
    return(
        <>
        <Image style={styles.imageSize}
            source={require('./assets/x.jpg')} />
            
            <Image style={styles.imageSize}
            source={require('./assets/circ.png')} />
        </>
        
                
    );
};


const styles = StyleSheet.create({
    imageSize: {
        //flexDirection: 'row',
        width: 70,
        height: 70,
        margin: 10,
    },

});