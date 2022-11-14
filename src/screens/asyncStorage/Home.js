// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, { useEffect, useState } from 'react';
// import { View, Text, Pressable, StyleSheet, TextInput, Alert } from "react-native";
// import CustomButton from '../utils/CustomButton';
// import GlobalStyle from '../utils/GlobalStyle';


// const Home = ({ navigation, route }) => {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     const getData = () => {
//         try {
//             AsyncStorage.getItem('UserData').then(value => {
//                 if (value != null) {
//                     let item = JSON.parse(value);
//                     setName(item.name);
//                     setAge(item.age);
//                 }
//             })
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }

//     const updateData = async () => {
//         if (name.length == 0) {
//             Alert.alert('Warning !', 'Please write your name');
//         }
//         else {
//             try {
//                 let item = {'name': name};
//                 await AsyncStorage.mergeItem('UserData', JSON.stringify(item));
//                 Alert.alert('Warning!', 'Your data is updated');
//             }
//             catch (error) {
//                 console.log(error)
//             }
//         }

//     }

//     const removeData = async () => {
//         try {
//             await AsyncStorage.removeItem('UserName');
//             navigation.navigate('Login');
//         }
//         catch (error) {
//             console.log(error)
//         }

//     }

//     useEffect(() => {
//         getData()
//     }, []);
//     return (
//         <View style={GlobalStyle.body}>
//             <Text style={styles.text}>Welcome {name}</Text>
//             <Text style={styles.text}>Your age is  {age}</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Update the name"
//                 onChangeText={(val) => setName(val)}
//             />
//             <CustomButton
//                 onPressHandler={updateData}
//                 color='#e6ccff'
//                 title='Update'
//             />
//             <CustomButton
//                 onPressHandler={removeData}
//                 color='#f55442'
//                 title='Delete'
//             />

//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     text: {
//         fontSize: 20
//     },
//     input: {
//         borderWidth: 1,
//         width: 200,
//         borderRadius: 10,
//         height: 40,
//         backgroundColor: '#fff',
//         textAlign: 'center',
//         marginTop: 100,
//         borderColor: '#777'
//     }
// })

// export default Home;