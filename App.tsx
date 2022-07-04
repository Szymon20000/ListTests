/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {setState(!state)}}>
        <Text> toggle </Text>
      </TouchableHighlight>
      <Text> {state ? 'recycleV' : 'Flashli'} </Text>
      {state && <RecycleViewerExample data={DATA}/>}
      {(!state) && <FlashListExample data={DATA} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
