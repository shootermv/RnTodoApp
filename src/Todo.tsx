import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
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
      <BouncyCheckbox isChecked={itm.isDone} onPress={toggleSwitch} />
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
