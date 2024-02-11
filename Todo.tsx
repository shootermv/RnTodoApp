import React from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';

const Todo = ({
  itm,
  edit,
}: {
  itm: {id: string; text: string; isDone: boolean};
  edit: (itm: {id: string; text: string; isDone: boolean}) => void;
}) => {
  const toggleSwitch = () => {
    edit({...itm, isDone: !itm.isDone});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{itm.text}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={itm.isDone ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={itm.isDone}
      />
    </View>
  );
};

export default Todo;
const styles = StyleSheet.create({
  textContainer: {flex: 1},
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
});
