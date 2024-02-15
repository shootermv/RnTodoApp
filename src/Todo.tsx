import React from 'react';
import {StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Item} from './Item';
import MyText from './MyText';
import MyView from './MyView';
const Todo = ({itm, edit}: {itm: Item; edit: (itm: Item) => void}) => {
  const toggleSwitch = () => {
    edit({...itm, isDone: !itm.isDone});
  };

  return (
    <MyView style={styles.container}>
      <MyText style={styles.textContainer}>{itm.text}</MyText>
      <BouncyCheckbox isChecked={itm.isDone} onPress={toggleSwitch} />
    </MyView>
  );
};

export default Todo;
const styles = StyleSheet.create({
  textContainer: {flex: 1},
  container: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
});
