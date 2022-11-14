import React from 'react';
import { View, Text, Pressable, StyleSheet } from "react-native";
import CustomButton from './utils/CustomButton';



const ScreenA = ({ navigation, route }) => {

    
    const onPressHandler = () => {
        navigation.navigate('ScreenB')
    }

    return (
        <View style={styles.body}>
            <View style={styles.viewText}>
                <Text style={styles.text}>This is Screen A</Text>
                <Text style={styles.text}>{route.params?.message}</Text>

            </View>
            <CustomButton onPressHandler={onPressHandler} title={'Go to ScreenB'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewText:{
        margin: 10
    },
    text: {
        fontSize: 20,
        fontFamily: 'Lato-BlackItalic'
    }
})

export default ScreenA;