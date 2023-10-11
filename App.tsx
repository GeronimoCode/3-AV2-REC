import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
       


const footballPlayers = [
    {
    name: "Cristiano Ronaldo",
    position: "Forward",
    age: 36,
    },
    {
    name: "Lionel Messi",
    position: "Attacking Midfielder",
    age: 34,
    },
    {
    name: "Neymar Jr.",
    position: "Forward",
    age: 29,
    },
    {
    name: "Kylian Mbappé",
    position: "Forward",
    age: 23,
    },
    {
    name: "Sergio Ramos",
    position: "Defender",
    age: 35,
    },
    {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    age: 30,
    },
    {
    name: "Robert Lewandowski",
    position: "Forward",
    age: 32,
    },
    {
    name: "Virgil van Dijk",
    position: "Defender",
    age: 30,
    },
    {
    name: "Luka Modric",
    position: "Midfielder",
    age: 35,
    },
    {
    name: "Erling Haaland",
    position: "Forward",
    age: 21,
    },
  ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
