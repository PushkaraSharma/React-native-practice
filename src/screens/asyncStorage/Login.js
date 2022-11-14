// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Image, Text, TextInput, Alert } from "react-native";
// import CustomButton from "../utils/CustomButton";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Login({ navigation }) {


//     const [name, setName] = useState('');
//     const [age, setAge] = useState();

//     const getData = () => {
//         try {
//             AsyncStorage.getItem('UserData').then((value) => {
//                 if (value != null) {
//                     navigation.navigate('Home');
//                 }
//             })
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
//     const setData = async () => {
//         if (name.length == 0 || age==null) {
//             Alert.alert('Warning!', 'Please write your name')
//         }
//         else {
//             try {
//                 await AsyncStorage.setItem('UserData', JSON.stringify({'name': name, 'age': age}));
//                 navigation.navigate('Home');
//             }
//             catch (error) {
//                 console.log(error);
//             }

//         }
//     }

//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <View style={styles.body}>
//             <Image
//                 style={styles.logo}
//                 source={require('../../assets/img/logo.png')}
//             />
//             <Text style={styles.text}>Async Storage</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter Name"
//                 onChangeText={(val) => setName(val)}
//             ></TextInput>
//             <TextInput
//                 style={styles.inputAge}
//                 placeholder="Enter Age"
//                 onChangeText={(val) => setAge(val)}
//             ></TextInput>
//             <CustomButton
//                 title={'Login'}
//                 color='#6699ff'
//                 onPressHandler={setData}
//             ></CustomButton>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#e6ccff'
//     },
//     logo: {
//         width: 100,
//         height: 100,
//         margin: 20
//     },
//     text: {
//         fontSize: 20
//     },
//     input: {
//         borderWidth: 1,
//         width: 200,
//         height: 40,
//         borderRadius: 10,
//         backgroundColor: '#fff',
//         textAlign: 'center',
//         marginTop: 100,
//         borderColor: '#777'
//     },
//     inputAge: {
//         borderWidth: 1,
//         width: 200,
//         height: 40,
//         borderRadius: 10,
//         backgroundColor: '#fff',
//         textAlign: 'center',
//         marginTop: 20,
//         borderColor: '#777'
//     }
// })