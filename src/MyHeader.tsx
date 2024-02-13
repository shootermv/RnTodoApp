import React from 'react';
import {View, StyleSheet} from 'react-native';
import Filters from './Filters';
import AddForm from './AddForm';

const MyHeader = ({
  addNew,
  changeFilter,
  activeFilter,
}: {
  addNew: (text: string) => void;
  changeFilter: (filter: string) => void;
  activeFilter: string;
}) => {
  return (
    <View style={styles.mainContainer}>
      <AddForm addNew={addNew} />
      <Filters changeFilter={changeFilter} activeFilter={activeFilter} />
    </View>
  );
};

export default MyHeader;
const styles = StyleSheet.create({
  mainContainer: {},
});
