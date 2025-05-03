import React from 'react';
import { ScrollView, View, Image, Appearance } from 'react-native';
import { Text, Button, Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '../../../hooks/useThemeRefresh';
import { useTranslation } from "react-i18next";
import { useRouter } from 'expo-router';
import ResetButton from '../../../components/ResetButton';
import BackNextNavigationButtons from '@/components/BackNextNavigationButtons';

Colors.loadSchemes({
  light: {
    screenBG: Colors.white,
    textColor: Colors.black,
  },
  dark: {
    screenBG: Colors.black,
    textColor: Colors.white,
  },
});

const systemColorScheme = Appearance.getColorScheme();
Colors.setScheme(systemColorScheme);

export default function PMRStep2() {
  useThemeRefresh();

  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScrollView 
      style={{ backgroundColor: Colors.screenBG }}
      contentContainerStyle={{ padding: 24, justifyContent: 'center', flexGrow: 1 }}
    >
      <ResetButton/>

      <View style={{ alignItems: 'center', marginBottom: 32 }}>
        <Image 
          source={require('../../../assets/images/adaptive-icon.png')} // 🔁 Replace with your actual image path
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      </View>

      <Text text60 color={Colors.textColor} style={{ marginBottom: 16, textAlign: 'center' }}>
        Tense your hands and forearms tightly. Hold for 5 seconds...
      </Text>

      <Text text70 color={Colors.textColor} style={{ marginBottom: 24, textAlign: 'center' }}>
        Now breathe out and release all tension. Let your muscles go soft.
      </Text>

      <BackNextNavigationButtons nextPageRoute="/PMR/step3"/>

    </ScrollView>
  );
}
