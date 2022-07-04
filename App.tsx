/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { DATA } from './data';
import { RecycleViewerExample } from './RecycleViewerExample';
import { FlashListExample } from './FlashListExample'

const App = (): Node => {
  const [state, setState] = useState(false);
  const [heavy, setHeavy] = useState(false);


  useEffect(() => {
    if (heavy) {
      const work = setInterval(() => {
        const start = performance.now();
        let x = 0; 
        for (let i = 0; i < 1e7; ++i) {
          x += i;
        } 
        const end = performance.now();
        console.log('work took', end - start);
      }, 1000);
      return () => {
        clearInterval(work);
      }
    }
  }, [heavy]);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight style={styles.toggle} onPress={() => {setState(!state)}}>
          <Text style={{color: 'white'}}> toggle </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.toggle} onPress={() => {setHeavy(!heavy)}}>
          <Text style={{color: 'white'}}>  heavy Work </Text>
        </TouchableHighlight>
      </View>
      
      <Text> {(state ? 'recycleV ' : 'Flashli ') + "is business Logic on:" + heavy.toString()} </Text>
      {state && <RecycleViewerExample data={DATA}/>}
      {(!state) && <FlashListExample data={DATA} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toggle: {
    padding: 5,
    backgroundColor: 'blue',
    marign: 5,
    borderRadius: 5,
  }
});

export default App;
