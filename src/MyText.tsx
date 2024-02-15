import React, {ReactNode} from 'react';
import {Text, useColorScheme, ViewStyle} from 'react-native';

interface MyTextProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}
import {Colors} from 'react-native/Libraries/NewAppScreen';
const MyText: React.FC<MyTextProps> = ({children, style}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const darkModestyles = {color: isDarkMode ? Colors.light : Colors.dark};
  const combinedStyles = Array.isArray(style)
    ? [darkModestyles, ...style]
    : [darkModestyles, style];
  return <Text style={combinedStyles}>{children}</Text>;
};
export default MyText;
