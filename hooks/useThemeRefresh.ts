import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { Colors } from 'react-native-ui-lib';

export const useThemeRefresh = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
  
    useEffect(() => {
      const sub = Appearance.addChangeListener(({ colorScheme }) => {
        Colors.setScheme(colorScheme);
        setTheme(colorScheme); // Триггерит ре-рендер
      });
  
      return () => sub.remove();
    }, []);
  
    return theme;
  };