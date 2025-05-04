import React from 'react';
import { ScrollView, View, Image, Appearance } from 'react-native';
import { Text, Button, Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '../hooks/useThemeRefresh';
import { useTranslation } from "react-i18next";
import { useRouter } from 'expo-router';
import ResetButton from './ResetButton';
import BackNextNavigationButtons from '@/components/BackNextNavigationButtons';
import BreathingCircle from './BreathingCircle';
import { IconSymbol } from './ui/IconSymbol';

export const themes = {
  light: {
    screenBG: Colors.grey80,
    textColor: Colors.black,
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
  },
};

const systemColorScheme = Appearance.getColorScheme();
Colors.setScheme(systemColorScheme);
Colors.loadSchemes(themes);

export default function PMRStepScreen({
    title,
    description,
    iconName,
    nextRoute,
  }: {
    title: string;
    description?: string;
    iconName: string;
    nextRoute: string;
  }) {
  useThemeRefresh();
  Colors.loadSchemes(themes);
  
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScrollView 
      style={{ backgroundColor: Colors.screenBG }}
      contentContainerStyle={{ padding: 24, justifyContent: 'center', flexGrow: 1 }}
    >
      <ResetButton/>

      <View style={{ alignItems: 'center', marginBottom: 32 }}>
        <BreathingCircle
            centerIcon={
                <IconSymbol name={iconName} size={32} color="#333" />
            }
        />
      </View>

      <Text text60 color={Colors.textColor} style={{ marginBottom: 16, textAlign: 'center' }}>
        {title}
      </Text>

      <Text text70 color={Colors.textColor} style={{ marginBottom: 24, textAlign: 'center' }}>
        {description}
      </Text>

      <BackNextNavigationButtons nextPageRoute={nextRoute}/>
    </ScrollView>
  );
}
