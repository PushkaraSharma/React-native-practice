import React, {useState} from "react";
import {Button, StyleSheet, Text, View} from 'react-native';

const LearnStyle = () => {
 
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <Text style={styles.text1}>1</Text>
                <Text style={styles.text2}>2</Text>
                <Text style={styles.text3}>3</Text>
            </View>
            <View style={styles.view2}>
                <Text>4</Text>
            </View>
            <View style={styles.view3}>
                <Text>5</Text>
            </View>
            <View style={styles.view4}>
                <Text style={styles.text6}>6</Text>
                <Text style={styles.text7}>7</Text>
            </View>
        </View>
        
    )
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    view1: {
        flexDirection: 'row',
        flex: 1,
        
    },
    view2: {
        backgroundColor: '#6699ff',
        flex: 1,
    },    
    view3: {
        backgroundColor: '#66ffff',
        flex: 1
    },
    view4: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'stretch'

    },
    text1:{
        backgroundColor: '#f55442',
        flex: 1,

    },
    text2:{
        backgroundColor: '#e9f542',
        flex: 2
    },
    text3:{
        backgroundColor: '#60f542',
        flex: 3
    },
    text6:{
        backgroundColor: '#42d4f5',
        flex: 1
    },
    text7:{
        backgroundColor: '#5742f5',
        flex: 1
    }
});

export default LearnStyle;