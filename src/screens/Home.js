import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, Alert } from "react-native";
import CustomButton from '../utils/CustomButton';
import GlobalStyle from '../utils/GlobalStyle';
import SQLite from "react-native-sqlite-storage";
import { useSelector, useDispatch } from 'react-redux';
import { setAge, setName, increaseAge, getCities } from '../redux/actions';
import { FlatList } from 'react-native-gesture-handler';

const  db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default'
    },
    () => {},
    error => {console.log(error)}
);

const Home = ({ navigation, route }) => {
    const {name, age, cities} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const getData = () => {
        try {
            db.transaction((tx)=>{
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results)=>{
                        console.log(results.rows.item)
                        let len = results.rows.length;
                        if(len>0){
                            dispatch(setName(results.rows.item(0).Name));
                            dispatch(setAge(results.rows.item(0).Age));
                        }
                    }
                )
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning !', 'Please write your name');
        }
        else {
            try {
                db.transaction((tx)=> {
                    tx.executeSql(
                        "UPDATE Users SET Name=?", 
                        [name],
                        ()=>{Alert.alert('Warning!', 'Your data is updated');},
                        error=>{console.log(error)}
                    )
                })
            }
            catch (error) {
                console.log(error)
            }
        }

    }

    const removeData = async () => {
        try {
            db.transaction((tx)=>{
                tx.executeSql(
                    "DELETE FROM Users",
                    [],
                    ()=>{navigation.navigate('Login')},
                    error=>{console.log(error)}
                )
            })
            
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        dispatch(getCities());
        getData();
    }, []);
    return (
        <View style={GlobalStyle.body}>
            <Text style={styles.text}>Welcome {name}</Text>
            <FlatList
            keyExtractor={(item, index) => index.toString()}
                data={cities}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.country}</Text>
                        <Text style={styles.desc}>{item.city}</Text>
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    input: {
        borderWidth: 1,
        width: 200,
        borderRadius: 10,
        height: 40,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginTop: 100,
        borderColor: '#777'
    },
    item:{
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#999',
        width: 300,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 25,
        color: '#000',
        margin: 10
    },
    desc:{
        fontSize: 18,
        color: '#999999'
    }
})

export default Home;