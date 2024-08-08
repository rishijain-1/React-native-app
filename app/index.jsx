import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ImageBackground, ScrollView, RefreshControl } from 'react-native';
import Header from '../component/header';
import Footer from '../component/footer';
import FormModal from '../component/FormModal';

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assest/img/home-img.jpg')} style={styles.backgroundImage}>
               
                <ScrollView
                    contentContainerStyle={styles.scrollContentContainer}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                     <Header />
                    <View style={styles.module}>
                        
                        <Text style={styles.text}>Home</Text>
                        <Button
                            title="Contact Me"
                            onPress={() => setModalVisible(true)}
                            color="#841584"
                        />
                        <Text style={{color:'#fff', fontSize:20, marginTop:10, fontWeight:'bold'}}>Pull Down To Refresh</Text>

                    </View>
                </ScrollView>
                <FormModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                />
                <Footer />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    scrollContentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    module: {
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
    },
});
