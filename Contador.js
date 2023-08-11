import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function Contador(){

    const [count, setCount] = useState(0);

    const Pressionar = () =>{
        setCount((prevCount) => prevCount + 1);
    };

    return(
        <TouchableOpacity style={styles.space} onPress={Pressionar}>

            <Text style = {styles.textSize}>{ count }</Text>

        </TouchableOpacity>




    );

};

const styles = StyleSheet.create({

    space:{
        padding: 20,

    },

    textSize:{
        fontSize: 24
    },

});