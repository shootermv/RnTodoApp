import React, {StyleSheet} from 'react-native';
import MyView from './MyView';
import MyText from './MyText';
import {FC} from 'react';
import {Item} from './Item';
import {useTranslation} from 'react-i18next';
const NoTodos: FC<{todos: Item[]}> = ({todos}) => {
  const {t} = useTranslation();
  return (
    <MyView style={styles.container}>
      <MyText style={styles.centered}>
        {todos.length === 0 ? t('NoTodosYet') : t('NoResults')}
      </MyText>
    </MyView>
  );
};
export default NoTodos;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  centered: {justifyContent: 'center'},
});
