import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, View, TouchableOpacity, ScrollView } from 'react-native';
import clients from './Clients.json';
import home from './Home.json';
import completed from './Completed.json';
import { Menu, Provider, TouchableRipple } from 'react-native-paper';

export const Client = (client) => {
    console.log(client);

    return (
        <View>{JSON.stringify(client)}</View>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#4d79ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 40,
        width: "100%"
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 150 / 2,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "lime",
    },
    menuItem: {
        borderWidth: 1,
        borderColor: "#20232a",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 5,
        overflow: 'hidden',
    },
    scheduleSwitch: {
        width: "100%",
        position: "absolute",
        backgroundColor: "transparent",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        top: 135
    },
    scheduleHeader: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: 10,
        fontSize: 30,
        color: "white"
    },
    scroll: {
        flex: 1,
        width: "100%",
        position: "absolute",
        top: 200,
        backgroundColor: "transparent",
        height: "75%"
    },
    scheduleItem: {
        width: "95%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    scheduleItemText: {
        padding: 5,
        margin: 5,
        color: 'black',
    },

});
