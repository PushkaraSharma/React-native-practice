// import React from 'react';
// import {
//   Text,
//   View,
// } from 'react-native';
// import Login from './components/Login';
// import LearnStyle from './components/LearnStyle';
// import ListItems from './components/ListItems';
// import SectionLists from './components/SectionLists';
// import TextInputs from './components/TextInputs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ScreenA from './components/ScreenA';
// import ScreenB from './components/ScreenB';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// // const Stack = createStackNavigator();
// const Tabs = createMaterialBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tabs.Navigator
//       screenOptions={({route})=> ({
//         tabBarIcon: ({focused, size, color}) => {
//           let name = '';
//           if(route.name=='ScreenA'){
//             name = 'autoprefixer'
//             size=focused ? 20: 15;
//           }
//           else if(route.name=='ScreenB'){
//             name='btc'
//             size=focused ? 20: 15;
//           }
//           return (
//             <FontAwesome5
//             name={name}
//             size={size}
//             color={color}
//             />
//           )
//         },
//       })
//     }
//     activeColor= '#fff'
//     barStyle={{backgroundColor: '#694fad'}}

//     >
//         <Tabs.Screen
//           name="ScreenA"
//           component={ScreenA}
//           options={{tabBarBadge: 4}}

//         />
//         <Tabs.Screen
//           name='ScreenB'
//           component={ScreenB}
//         />
//       </Tabs.Navigator>
//     </NavigationContainer>
//   )
//   // return (
//   //   <NavigationContainer>
//   //     <Tabs.Navigator
//   //     screenOptions={({route})=> ({
//   //       tabBarIcon: ({focused, size, color}) => {
//   //         let name = '';
//   //         if(route.name=='ScreenA'){
//   //           name = 'autoprefixer'
//   //           size=focused ? 20: 10;
//   //         }
//   //         else if(route.name=='ScreenB'){
//   //           name='btc'
//   //           size=focused ? 20: 10;
//   //         }
//   //         return (
//   //           <FontAwesome5
//   //           name={name}
//   //           size={size}
//   //           color={color}
//   //           />
//   //         )
//   //       },
//   //     })
//   //   }
//   //    tabBarOptions={{
//   //     activeTintColor: '#f55442',
//   //     activeBackgroundColor: '#00000020',
//   //     showLabel: false

//   //   }
      
//   //    } 
//   //     >
//   //       <Tabs.Screen
//   //         name="ScreenA"
//   //         component={ScreenA}
//   //         options={{tabBarBadge: 4}}

//   //       />
//   //       <Tabs.Screen
//   //         name='ScreenB'
//   //         component={ScreenB}
//   //       />
//   //     </Tabs.Navigator>
//   //   </NavigationContainer>
//   // )
// };

// for material tabs 
//const Tabs = createMaterialBottomTabNavigator(); 

// const App = () => {
//     return (
//       <NavigationContainer>
//         <Tabs.Navigator
//         screenOptions={({route})=> ({
//           tabBarIcon: ({focused, size, color}) => {
//             let name = '';
//             if(route.name=='ScreenA'){
//               name = 'autoprefixer'
//               size=focused ? 20: 15;
//             }
//             else if(route.name=='ScreenB'){
//               name='btc'
//               size=focused ? 20: 15;
//             }
//             return (
//               <FontAwesome5
//               name={name}
//               size={size}
//               color={color}
//               />
//             )
//           },
//         })
//       }
//       activeColor= '#fff'
//       barStyle={{backgroundColor: '#694fad'}}
  
//       >
//           <Tabs.Screen
//             name="ScreenA"
//             component={ScreenA}
//             options={{tabBarBadge: 4}}
  
//           />
//           <Tabs.Screen
//             name='ScreenB'
//             component={ScreenB}
//           />
//         </Tabs.Navigator>
//       </NavigationContainer>
//     )
//   };
  
  

// export default App;
