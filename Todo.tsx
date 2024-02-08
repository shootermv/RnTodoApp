import React from 'react';
import {Text, View} from 'react-native';

const Todo = ({itm}: {itm: {text: string; isDone: boolean}}) => {
  return (
    <View>
      <Text>{itm.text}</Text>
    </View>
  );
};

export default Todo;
