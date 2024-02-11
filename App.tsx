/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyHeader from './MyHeader';
import Todo from './Todo';
const data = [
  {
    id: 1,
    text: 'create to do app',
    isDone: false,
  },
  {
    id: 2,
    text: 'try using basic RN components',
    isDone: false,
  },
  {
    id: 3,
    text: 'publish article about it',
    isDone: true,
  },
];
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [todos, setTodos] = useState(data);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [activeFilter, setAtiveFilter] = useState('All');
  const addNew = (text: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        isDone: false,
      },
    ]);
  };
  const edit = (item: {id: number; text: string; isDone: boolean}) => {
    setTodos(
      todos.map(origItm => {
        if (origItm.id === item.id) {
          return item;
        }
        return origItm;
      }),
    );
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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}>
        <MyHeader
          addNew={addNew}
          changeFilter={changeFilter}
          activeFilter={activeFilter}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            flex: 1,
          }}>
          {filteredTodos.length > 0 ? (
            filteredTodos.map(itm => (
              <Todo key={itm.text} itm={itm} edit={edit} />
            ))
          ) : (
            <View>
              <Text>No Results...</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
