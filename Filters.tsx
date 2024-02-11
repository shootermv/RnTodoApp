import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Filters = ({
  changeFilter,
  activeFilter,
}: {
  changeFilter: (filter: string) => void;
  activeFilter: string;
}) => {
  const filters = ['All', 'Active', 'Done'];
  return (
    <View style={styles.filtersContainer}>
      {filters.map(filterText => (
        <TouchableOpacity
          key={filterText}
          onPress={() => changeFilter(filterText)}
          style={[
            styles.filterButton,
            filterText === activeFilter ? styles.activeFilter : {},
          ]}>
          <Text
            style={[
              filterText === activeFilter ? styles.activeFilterText : {},
            ]}>
            {filterText}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Filters;
const styles = StyleSheet.create({
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
});
