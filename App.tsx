/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyHeader from './MyHeader';
import Todo from './Todo';
const todos = [
  {
    text: 'create to do app',
    isDone: false,
  },
  {
    text: 'try using basic RN components',
    isDone: false,
  },
  {
    text: 'publish article about it',
    isDone: false,
  },
];
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <MyHeader />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {todos.map(itm => (
            <Todo key={itm.text} itm={itm} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
