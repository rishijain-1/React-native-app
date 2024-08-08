import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../component/header.jsx';
import Footer from '../component/footer.jsx';

export default function About() {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
                <View style={styles.module}>
                    <Text style={{color:'#000', fontSize:40, fontWeight:'bold'}}>About Me</Text>
                    <Text style={{color:'#000', fontSize:20}}>Hello, I am Rishi Jain ☺️</Text>
                </View>
           <Footer/>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#fff',

    },
    module: {
        alignItems: 'center',
        width:'100%',
        height:'90%',
        display: 'flex',
        padding:10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

