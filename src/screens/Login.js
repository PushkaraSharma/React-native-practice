import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";
import SQLite from "react-native-sqlite-storage";
import { useSelector, useDispatch } from "react-redux";
import { setAge, setName } from "../redux/actions";

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

export default function Login({ navigation }) {

    const {name, age} = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        createTable();
        getData();
    }, [])

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    }



    const getData = () => {
        try {
            db.transaction((tx)=>{
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results)=>{
                        let len = results.rows.length;
                        if(len>0){
                            console.log(results.rows.item)
                            navigation.navigate('Home');
                        }
                    }
                )
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                await db.transaction(async (tx) => {
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES (?,?)",
                        [name, age]
                    );
                })
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../../assets/img/logo.png')}
            />
            <Text style={styles.text}>Redux Demo</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                onChangeText={(val) => dispatch(setName(val))}
            ></TextInput>
            <TextInput
                style={styles.inputAge}
                placeholder="Enter Age"
                onChangeText={(val) => dispatch(setAge(val))}
            ></TextInput>
            <CustomButton
                title={'Login'}
                color='#6699ff'
                onPressHandler={setData}
            ></CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e6ccff'
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20
    },
    text: {
        fontSize: 20
    },
    input: {
        borderWidth: 1,
        width: 200,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginTop: 100,
        borderColor: '#777'
    },
    inputAge: {
        borderWidth: 1,
        width: 200,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginTop: 20,
        borderColor: '#777'
    }
})

// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     StyleSheet,
//     Image,
//     Text,
//     TextInput,
//     Alert,
// } from 'react-native';
// import CustomButton from '../utils/CustomButton';
// import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error) }
// );

// export default function Login({ navigation }) {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     useEffect(() => {
//         createTable();
//         getData();
//     }, []);

//     const createTable = () => {
//         db.transaction((tx) => {
//             tx.executeSql(
//                 "CREATE TABLE IF NOT EXISTS "
//                 + "Users "
//                 + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
//             )
//         })
//     }

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             navigation.navigate('Home');
//             //         }
//             //     })
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     "SELECT Name, Age FROM Users",
//                     [],
//                     (tx, results) => {
//                         var len = results.rows.length;
//                         if (len > 0) {
//                             navigation.navigate('Home');
//                         }
//                     }
//                 )
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const setData = async () => {
//         if (name.length == 0 || age.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 await db.transaction(async (tx) => {
//                     await tx.executeSql(
//                         "INSERT INTO Users (Name, Age) VALUES (?,?)",
//                         [name, age]
//                     );
//                 })
//                 navigation.navigate('Home');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }

//     return (
//         <View style={styles.body} >
//             <Image
//                 style={styles.logo}
//                 source={require('../../assets/img/logo.png')}
//             />
//             <Text style={styles.text}>

//             </Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Enter your name'
//                 onChangeText={(value) => setName(value)}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder='Enter your age'
//                 onChangeText={(value) => setAge(value)}
//             />
//             <CustomButton
//                 title='Login'
//                 color='#1eb900'
//                 onPressHandler={setData}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#0080ff',
//     },
//     logo: {
//         width: 200,
//         height: 100,
//         margin: 20,
//     },
//     text: {
//         fontSize: 30,
//         color: '#ffffff',
//         marginBottom: 130,
//     },
//     input: {
//         width: 300,
//         borderWidth: 1,
//         borderColor: '#555',
//         borderRadius: 10,
//         backgroundColor: '#ffffff',
//         textAlign: 'center',
//         fontSize: 20,
//         marginBottom: 10,
//     }
// })