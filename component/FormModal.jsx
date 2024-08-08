
import React from 'react';

import { SafeAreaView, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

const FormModal = ({ visible, onClose }) => {
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.modalOverlay}>
                <SafeAreaView style={styles.modalContent}>
                    <Text style={styles.title}>Enter Your Details</Text>
                    <Text style={{marginBottom: 5}}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#aaa"
                        value={name}
                        onChangeText={setName}
                    />
                    <Text style={{marginBottom: 5}}>Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Number"
                        placeholderTextColor="#aaa"
                        keyboardType="numeric"
                        value={number}
                        onChangeText={setNumber}
                    />
                    <Text style={{marginBottom: 5}}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#aaa"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Button
                        title="Submit"
                        onPress={() => {
                            if(!name || !number || !email){
                                alert("Please fill all the fields");
                                return;
                            }
                            alert(`Name: ${name}\nNumber: ${number}\nEmail: ${email}`);
                            onClose(); 
                        }}
                        color="#841584"
                    />
                    <Button
                    style={styles.button}  
                        title="Close"
                        onPress={()=>{
                            onClose();
                        }} 
                    />
                </SafeAreaView>
            </SafeAreaView>
        </Modal>
    );
};

export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#eee',
        color: '#333',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#841584',
        color: '#fff',
        padding: 20,
        borderRadius: 5,
        marginTop: 10,
    },
});

export default FormModal;
