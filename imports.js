import React from 'react';
import type {Node} from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home.js';
import Screen1 from './Screen1.js';
import {HomeStyles} from './styles.js';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  WebView,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const books = ['cat', 'dog', 'bird', 'cat'];

const App: () => Node = () => {
  const booksCount = {};

  books.forEach(books => {
    if (booksCount[books]) {
      booksCount[books]++;
    } else {
      booksCount[books] = 1;
    }
  });

  return(
    <View>
      <Text>Number of books:</Text>
      {Object.keys(booksCount).map(books => (
        <Text key={books}>
          {books}: {booksCount[books]}
        </Text>
      ))}
    </View>
  );
  
};
