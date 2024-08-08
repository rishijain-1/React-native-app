import React  from "react";
import { Link } from "expo-router";
import { StyleSheet, Text, View ,} from "react-native";

const Header=()=>{
    return(
        <View style={styles.header}>
            <Link href="/" style={styles.headerText}>Home</Link>
            <Link href="/about" style={styles.headerText}>About</Link>
            <Link href="/service" style={styles.headerText}>Service</Link>
            <Link href="/webView" style={styles.headerText}>Web View</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 15,
        backgroundColor: '#333',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        top: 0,
        zIndex: 1000,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
})


export default Header;