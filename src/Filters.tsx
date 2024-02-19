import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import MyText from './MyText';
import {useTranslation} from 'react-i18next';

const Filters = ({
  changeFilter,
  activeFilter,
}: {
  changeFilter: (filter: string) => void;
  activeFilter: string;
}) => {
  const {t} = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const filters = [t('All'), t('Active'), t('Done')];
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
          <MyText
            style={
              [
                filterText === activeFilter
                  ? (styles.activeFilterText as ViewStyle)
                  : ({color: isDarkMode ? '#000' : '#333'} as ViewStyle),
              ] as ViewStyle[]
            }>
            {filterText}
          </MyText>
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
