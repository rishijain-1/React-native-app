import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Created By Rishi Jain @ 2024</Text>
    </View>
);

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        padding: 15,
        backgroundColor: '#333',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 1000,
    },
    footerText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default Footer;