import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const MyHeader = ({addNew}: {addNew: () => void}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>header</Text>
      <TouchableOpacity onPress={addNew}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyHeader;
const styles = StyleSheet.create({
  text: {color: '#000'},
  title: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
});
