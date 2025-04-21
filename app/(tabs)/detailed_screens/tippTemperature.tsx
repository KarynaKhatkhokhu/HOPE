import React from 'react';
import { ScrollView, Appearance } from 'react-native';
import { Colors, Text } from 'react-native-ui-lib';
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { useTranslation } from "react-i18next";
import ImageCard from '@/components/ImageCard';


Colors.loadSchemes({
  light: {
    screenBG: Colors.white,
    cardBG: Colors.grey80,
    textColor: Colors.black,
  },
  dark: {
    screenBG: Colors.black,
    cardBG: Colors.grey10,
    textColor: Colors.white,
  },
});

const systemColorScheme = Appearance.getColorScheme();
Colors.setScheme(systemColorScheme);

export default function TippTemperatureDetailed() {
  useThemeRefresh();
  
  const { t } = useTranslation();

  return (
    <ScrollView style={{marginTop: 40, backgroundColor: Colors.screenBG}}>
      <Text> kekeke </Text>
    </ScrollView>
  )
};