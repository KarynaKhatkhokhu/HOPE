import React from 'react';
import { ScrollView, View, Text, Appearance } from 'react-native';
import { Button, Colors, Text as UIText } from 'react-native-ui-lib';
import { useThemeRefresh } from '../../../hooks/useThemeRefresh';
import { useTranslation } from "react-i18next";
import { useRouter } from 'expo-router';

export const themes = {
  light: {
    screenBG: Colors.grey80,
    cardBG: Colors.grey80,
    textColor: Colors.black,
    myButtonColor: Colors.grey50,
    myButtonTextColor: Colors.black
  },
  dark: {
    screenBG: Colors.grey10,
    cardBG: Colors.grey10,
    textColor: Colors.white,
    myButtonColor: Colors.black,
    myButtonTextColor: Colors.white
  },
};

const systemColorScheme = Appearance.getColorScheme();
Colors.setScheme(systemColorScheme);
Colors.loadSchemes(themes);

export default function PMRIntro() {
  useThemeRefresh();
  Colors.loadSchemes(themes);
  
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ScrollView 
      style={{ backgroundColor: Colors.grey10 }} 
      contentContainerStyle={{ padding: 24, justifyContent: 'center', flexGrow: 1 }}
    >
      <View style={{ marginBottom: 32 }}>
        <UIText text50 color={Colors.textColor} style={{ fontWeight: 'bold', marginBottom: 16 }}>
          Progressive Muscle Relaxation
        </UIText>
        <UIText text70 color={Colors.textColor}>
          This short exercise will guide you to release tension in your body and calm your mind. 
          It only takes a few minutes and can help reduce stress and anxiety.
        </UIText>
      </View>

      <Button 
        label="Begin Relaxation" 
        onPress={() => router.navigate("/PMR/step1")} 
        size={Button.sizes.large}
        backgroundColor={Colors.myButtonColor}
        color={Colors.textColor}
      />
    </ScrollView>
  );
}
