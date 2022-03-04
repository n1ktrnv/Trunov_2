import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Журнал Bright
      </Text>
      <Card style={styles.card}>
        <Text style={styles.blueText}>
          Новости
        </Text>
        <Image 
            source={require('./pic.jpg')} 
            style={styles.img} 
          />
        <Text style={styles.newsHeading}>
          Кофе vs чай: секреты бодрости
        </Text>
        <Text style={styles.plainText}>
          Два самых популярных в мире напитка продолжают бороться за звание самого энергетического. Наверное, здесь все зависит от индивидуального восприятия, но об их свойства узнать мы обязаны.
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  card: {
    padding: 40,
  },
  blueText: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 40,
  },
  newsHeading: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 45,
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  plainText: {
    fontSize: 16,
    
  },
});
