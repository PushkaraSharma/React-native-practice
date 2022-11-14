import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const CustomButton = (props) => {
    
    return (
        <Pressable
                onPress={props.onPressHandler}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#ddd' : props.color },
                    styles.button, {...props.style}]}
                android_ripple={{ color: '#00f' }}
            >
                <Text style={styles.text2}>
                    {props.title}
                </Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        borderRadius: 10,
        padding: 10,
        margin: 20
    },
    text2: {
        fontSize: 15,
        textAlign: 'center'
    },

})
export default CustomButton;