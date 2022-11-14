// import React, { useEffect, useState } from 'react';
// import { View, Text, Pressable, StyleSheet, TextInput, Alert } from "react-native";
// import CustomButton from '../utils/CustomButton';
// import GlobalStyle from '../utils/GlobalStyle';
// import SQLite from "react-native-sqlite-storage";

// const  db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default'
//     },
//     () => {},
//     error => {console.log(error)}
// );

// const Home = ({ navigation, route }) => {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     const getData = () => {
//         try {
//             db.transaction((tx)=>{
//                 tx.executeSql(
//                     "SELECT Name, Age FROM Users",
//                     [],
//                     (tx, results)=>{
//                         console.log(results.rows.item)
//                         let len = results.rows.length;
//                         if(len>0){
//                             setName(results.rows.item(0).Name);
//                             setAge(results.rows.item(0).Age);
//                         }
//                     }
//                 )
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
//                 db.transaction((tx)=> {
//                     tx.executeSql(
//                         "UPDATE Users SET Name=?", 
//                         [name],
//                         ()=>{Alert.alert('Warning!', 'Your data is updated');},
//                         error=>{console.log(error)}
//                     )
//                 })
//             }
//             catch (error) {
//                 console.log(error)
//             }
//         }

//     }

//     const removeData = async () => {
//         try {
//             db.transaction((tx)=>{
//                 tx.executeSql(
//                     "DELETE FROM Users",
//                     [],
//                     ()=>{navigation.navigate('Login')},
//                     error=>{console.log(error)}
//                 )
//             })
            
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