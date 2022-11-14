import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../utils/CustomButton";
import GlobalStyle from "../utils/GlobalStyle";

const ScreenB = ({navigation, route}) => {

    const {ItemName, ItemId} = route.params;

    const onPressHandler = () => {
        navigation.navigate('ScreenA', {message: 'Hello Dear'});
        // navigation.goBack();
    }
    return (
        <View style={GlobalStyle.body}>
            <View style={GlobalStyle.viewText}>
                <Text style={GlobalStyle.text}>This is Screen B</Text>
                <Text style={GlobalStyle.text}>{ItemName}</Text>
                <Text style={GlobalStyle.text}>{ItemId}</Text>
            </View>
            <CustomButton onPressHandler={onPressHandler} title={'Go Back'}/>
        </View>
    )
}


export default ScreenB;