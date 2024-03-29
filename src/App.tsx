/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useMemo, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import Todo from './Todo';
import {Item} from './Item';

const data: Item[] = [];
import i18n from './i18n';
import NoTodos from './NoTodos';
const MY_TODOS_STORAGE_KEY = 'MY_TODOS_STORAGE_KEY';
function App(): React.JSX.Element {
  useEffect(() => {
    // get data from storage
    const getData = async () => {
      const value = await AsyncStorage.getItem(MY_TODOS_STORAGE_KEY);
      setTodos(value ? JSON.parse(value) : []);
    };
    getData();
  }, []);
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);
  const isDarkMode = useColorScheme() === 'dark';
  const [todos, setTodos] = useState(data);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const adaptiveStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };
  const [activeFilter, setAtiveFilter] = useState('All');
  const addNew = async (text: string) => {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        text,
        isDone: false,
      },
    ];
    setTodos(newTodos);
    const jsonValue = JSON.stringify(newTodos);
    await AsyncStorage.setItem(MY_TODOS_STORAGE_KEY, jsonValue);
  };
  const edit = async (item: Item) => {
    const newTodos = todos.map((origItm: Item) => {
      if (origItm.id === item.id) {
        return item;
      }
      return origItm;
    });
    setTodos(newTodos);
    const jsonValue = JSON.stringify(newTodos);
    await AsyncStorage.setItem(MY_TODOS_STORAGE_KEY, jsonValue);
  };
  const changeFilter = (filter: string) => setAtiveFilter(filter);
  const filteredTodos = useMemo(() => {
    return todos.filter(({isDone}) => {
      if (activeFilter !== 'All') {
        return activeFilter === 'Active' ? !isDone : isDone;
      }
      return true;
    });
  }, [activeFilter, todos]);
  return (
    <SafeAreaView style={[backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={[backgroundStyle]}>
        <Header
          addNew={addNew}
          changeFilter={changeFilter}
          activeFilter={activeFilter}
        />
        <View
          style={{
            ...adaptiveStyle,
            flex: 1,
          }}>
          {filteredTodos.length > 0 ? (
            filteredTodos.map(itm => (
              <Todo key={itm.text} itm={itm} edit={edit} />
            ))
          ) : (
            <NoTodos todos={todos} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
