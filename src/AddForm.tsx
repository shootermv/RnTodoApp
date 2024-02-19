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
import {useTranslation} from 'react-i18next';

const AddForm = ({addNew}: {addNew: (text: string) => void}) => {
  const {t} = useTranslation();
  const [newTodoText, onChangeText] = React.useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const adaptedStyle = {color: isDarkMode ? '#fff' : '#000'};
  return (
    <MyView style={styles.container}>
      <View style={[styles.title]}>
        <TextInput
          style={[styles.input, adaptedStyle]}
          onChangeText={onChangeText}
          value={newTodoText}
          placeholder={t('inputPlaceholder')}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('New', newTodoText);
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
