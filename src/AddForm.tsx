import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  useColorScheme,
} from 'react-native';
import MyView from './MyView';

const AddForm = ({addNew}: {addNew: (text: string) => void}) => {
  const [newTodoText, onChangeText] = React.useState('');
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <MyView style={styles.container}>
      <View style={[styles.title]}>
        <TextInput
          style={[styles.input, {color: isDarkMode ? '#fff' : '#000'}]}
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
  input: {borderWidth: 5},
  buttonText: {color: '#fff', fontSize: 37},
  title: {
    flex: 1,
  },
  button: {
    paddingVertical: 0,
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
