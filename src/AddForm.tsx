import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MyView from './MyView';

const AddForm = ({addNew}: {addNew: (text: string) => void}) => {
  const [newTodoText, onChangeText] = React.useState('');
  return (
    <MyView style={styles.container}>
      <View style={[styles.title]}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={newTodoText}
          placeholder="new todo..."
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (!newTodoText) {
            return;
          }
          addNew(newTodoText);
          onChangeText('');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </MyView>
  );
};

export default AddForm;
const styles = StyleSheet.create({
  input: {color: '#000', borderWidth: 1},
  buttonText: {color: '#fff', fontSize: 37},
  title: {
    flex: 1,
  },
  button: {
    paddingVertical: 1,
    paddingHorizontal: 13,
    backgroundColor: 'gray',
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
});
