import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Todo = ({itm}: {itm: {text: string; isDone: boolean}}) => {
  return (
    <View style={styles.container}>
      <Text>{itm.text}</Text>
    </View>
  );
};

export default Todo;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
});
