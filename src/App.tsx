/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './Header';
import Todo from './Todo';
import {Item} from './Item';
import MyText from './MyText';
import MyView from './MyView';
const data: Item[] = [];
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
        id: uuidv4(),
        text,
        isDone: false,
      },
    ]);
  };
  const edit = (item: Item) => {
    setTodos(
      todos.map((origItm: Item) => {
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
        contentContainerStyle={{flexGrow: 1}}
        style={[backgroundStyle, {borderWidth: 1}]}>
        <Header
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
            <MyView
              style={{
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
              <MyText style={{textAlign: 'center'}}>
                {todos.length === 0
                  ? 'No Todos yet, go ahead and add some!'
                  : 'No Results...'}
              </MyText>
            </MyView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
