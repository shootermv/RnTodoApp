import React from 'react';
import {View, StyleSheet} from 'react-native';
import Filters from './Filters';
import AddForm from './AddForm';

const Header = ({
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

export default Header;
const styles = StyleSheet.create({
  mainContainer: {},
});
