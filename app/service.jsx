
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet,Text} from 'react-native'
import Header from '../component/header.jsx'
import Footer from '../component/footer.jsx'

export default function Service(){
    return(
    
        <SafeAreaView style={styles.service}>
            <Header/>
                <View style={styles.module}>
                    <Text style={{color:'#000', fontSize:20}}>I am also a Android Developer,An android developer builds 
                    software applications for Android devices. They often work with Android Studio, the official Integrated 
                    Development Environment (IDE) for the Android operating system, and use programming languages like Java and Kotlin. </Text>
                </View>
            <Footer/>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    service: {
        alignItems: 'center',
        justifyContent:'space-between',
        flex:1,
        display: 'flex',
        flexDirection: 'column',
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3954041104.
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
        
    },
    module: {
        alignItems: 'center',
        width:'100%',
        height:'90%',
        display: 'flex',
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1402518672.
        padding:10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
   
})


