import React, {ReactNode} from 'react';
import {View, useColorScheme, ViewStyle} from 'react-native';

interface MyTextProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}
import {Colors} from 'react-native/Libraries/NewAppScreen';
const MyView: React.FC<MyTextProps> = ({children, style}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        style ?? {},
        {backgroundColor: isDarkMode ? Colors.dark : Colors.light},
      ]}>
      {children}
    </View>
  );
};
export default MyView;
