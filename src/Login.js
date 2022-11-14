import React, {useState} from "react";
import {Button, StyleSheet, Text, View} from 'react-native';

const Login = () => {
    const [counter, setCounter] = useState(0);
    
    const AddClick = () => {
        setCounter(counter+1);
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>{counter*5}</Text>
            <Text style={styles.text}>Login Page</Text>
            <Button title="Add" onPress={AddClick}></Button> 
            <Text>Add button clicked {counter} times</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#e6ccff',
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    text: {
        fontSize: 25,
        color: '#000000',
        fontWeight: "bold",
        margin: 15
    },
});

export default Login;