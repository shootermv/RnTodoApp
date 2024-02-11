import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Filters from './Filters';

const MyHeader = ({
  addNew,
  changeFilter,
  activeFilter,
}: {
  addNew: () => void;
  changeFilter: (filter: string) => void;
  activeFilter: string;
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>header</Text>
        <TouchableOpacity onPress={addNew} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Filters changeFilter={changeFilter} activeFilter={activeFilter} />
    </View>
  );
};

export default MyHeader;
const styles = StyleSheet.create({
  mainContainer: {},
  filtersContainer: {
    flexDirection: 'row',
    gap: 2,
    backgroundColor: '#333',
  },
  filterButton: {
    paddingVertical: 6,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  activeFilter: {
    backgroundColor: 'gray',
  },
  activeFilterText: {
    color: '#fff',
  },
  text: {color: '#000'},
  buttonText: {color: '#fff'},
  title: {
    flex: 1,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
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
