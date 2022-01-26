import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, View, TouchableOpacity, ScrollView } from 'react-native';
import clients from './Clients.json';
import home from './Home.json';
import completed from './Completed.json';
import { Image } from 'react-native';
import { Menu, Provider, TouchableRipple } from 'react-native-paper';
import { Client } from './Client';

export default function App() {
  const [visible, setVisible] = useState([...clients.map(() => false)]);
  const [namesVisible, setNamesVisible] = useState(true);
  const [onSchedule, setOnSchedule] = useState(true);
  const [onClient, setOnClient] = useState(false)

  const openMenu = (idx) => {
    setNamesVisible(false);
    setVisible([...clients.map((a, n) => { return idx === n })]);
  };

  const closeMenu = () => {
    setNamesVisible(true);
    setVisible([...clients.map(() => false)])
  };

  const menuOptions = () => {
    let arr = ["See tasks", "Leave voice note", "Add text note", "Hardware"]
    return <View style={styles.menuItem}>
      {arr.map((item, idx) => {
        return <TouchableOpacity><Text key={idx}>{item}</Text></TouchableOpacity>
      })}</View>
  }

  const clientIcons = clients.map((client, idx) => {
    return <View style={styles.container} key={idx * 10 + 11}>
      <TouchableOpacity
        onPressIn={() => console.log('pressed')}
        onLongPress={() => openMenu(idx)}
        onPressOut={() => closeMenu()}>
        <Image style={styles.image} source={{ uri: client.image, width: 200, height: 200 }} />
      </TouchableOpacity>
      <View style={styles.dropdown}>
        {visible[idx] && menuOptions()}
      </View>

      <Text style={{ color: '#fff' }}>{namesVisible && client.name.split(' ')[0]}</Text>
    </View>
  });

  return (
    <Provider>

      <SafeAreaView style={styles.app}>

        <Client client={onClient} />

        <View style={styles.iconContainer}>{clientIcons}</View>


        <View style={styles.scheduleSwitch}>
          <Pressable
            onPress={() => setOnSchedule(true)}
          ><Text style={styles.scheduleHeader}>Schedule</Text></Pressable>
          <Pressable
            onPress={() => setOnSchedule(false)}
          ><Text style={styles.scheduleHeader}>History</Text></Pressable>
        </View>
        {onSchedule ? <View style={styles.scroll}>
          <Text>On Schedule</Text>
          <ScrollView>{home.tasks.map((a, idx) => {
            return <TouchableRipple onPress={() => console.log('yes')}><View key={idx} style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>{a.name}</Text>
              <Text style={styles.scheduleItemText}>{a.period}</Text>
            </View></TouchableRipple>
          })}
          </ScrollView>
        </View>
          : <View style={styles.scroll}>
            <Text>On History</Text>
            <ScrollView>{completed.map((a, idx) => {
              return <TouchableRipple onPress={() => console.log('yes')}><View key={idx} style={styles.scheduleItem}>
                <Text style={styles.scheduleItemText}>{a.name}</Text>
                <Text style={styles.scheduleItemText}>{a.period}</Text>
                <Text style={styles.scheduleItemText}>{a.completedBy}</Text>
                <Text style={styles.scheduleItemText}>{a.timeCompleted}</Text>
              </View></TouchableRipple>
            })}
            </ScrollView>
          </View>
        }

        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
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
