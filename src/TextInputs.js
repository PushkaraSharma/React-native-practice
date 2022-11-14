import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable, Alert, ToastAndroid, Modal } from "react-native";
import CustomButton from "./CustomButton";

const TextInputs = () => {

    const [name, setName] = useState('');
    const [submit, setSubmit] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onPressHandler = () => {
        if (name.length > 4) {
            setSubmit(!submit);
        }
        else {
            // Alert.alert('Warning', 'Name should contain atleast 4 characters', [
            //     {text: 'Ok', onPress: () => console.warn('Ok is pressed')},
            //     {text: 'Cancel', onPress: () => console.warn('Cancel is pressed')},
            //     {text: 'later', onPress: () => console.warn('Later is pressed')}
            // ])
            setShowModal(true);
        }
    } 

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Enter your name
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder='e.g. Pushkara'
                onChangeText={(value) => setName(value)}
            ></TextInput>
            <CustomButton
            onPressHandler={onPressHandler}
            title={submit ? 'Clear': 'Submit'}
            />
            {submit ?
                <View>
                    <Text>Your name is: {name}</Text>
                </View> : null}

            <Modal
                visible={showModal}
                transparent
                onRequestClose={()=>{
                    setShowModal(false);
                }}
            >
                <View style={styles.warning}>
                    <View style={styles.warning_body}>
                        <View style={styles.warning_title}>
                            <Text style={styles.warning_title_text}>Warning !!</Text>
                        </View>
                        <View style={styles.warning_content}>
                            <Text style={styles.text}>Name should contain atleast 4 characters</Text>
                        </View>
                        <Pressable
                        onPress={()=>{
                            setShowModal(false);
                        }}
                        android_ripple={{color:'#fff'}}
                        animationType='fade'
                            >
                            <View style={styles.warning_button}>
                                <Text style={styles.warning_title_text}>Close</Text>
                            </View>
                        </Pressable>
                    </View>
                    
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        margin: 5
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '300',
    },
    textInput: {
        width: 200,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 8,
        margin: 10,
        textAlign: 'center',
        fontSize: 15
    },

    warning: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000030'
    },
    warning_body: {
        height:300,
        width: 300,
        backgroundColor: '#ffff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 20
    },
    warning_title:{
        backgroundColor: '#6699ff',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    warning_title_text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        color: '#000'
    },
    warning_content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    warning_button: {
        backgroundColor: '#e6ccff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }

})

export default TextInputs;