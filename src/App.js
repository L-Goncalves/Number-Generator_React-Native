import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';


const App = () =>{

    const [number, setNumber] = useState(0)

    function randomNumber(){
        let newNumber = Math.floor(Math.random() * 100)

        setNumber(newNumber)
    }

    return(
        <>
    <SafeAreaView style={style.container}>
        <Text style={style.number}>{number}</Text>
        <TouchableOpacity onPress={randomNumber} style={style.button}>
            <Text >Generate Number</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </>)
    
}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#32a852',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'

    },
    button: {
        width: '50%',
        fontSize: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        
    }
})

export default App;