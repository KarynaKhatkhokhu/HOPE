import React from 'react';
import { ScrollView } from 'react-native';
import { View, Colors, Text } from 'react-native-ui-lib';
import { useThemeRefresh } from '../../../hooks/useThemeRefresh';
import { useTranslation } from "react-i18next";
import { Themes } from '@/constants/Theme';
import ResetButton from '@/components/ResetButton';

export default function PMRIntro() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();

  return (
    <ScrollView 
      style={{ backgroundColor: Colors.screenBG }} 
      contentContainerStyle={{ padding: 24, justifyContent: 'center', flexGrow: 1 }}
    >
      <View style={{ marginBottom: 0 }}>
        <Text text50 color={Colors.textColor} style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 16, }}>
          {t('effective_rethinking.you_are_done.title')}
        </Text>
      
        <Text text70 color={Colors.textColor} style={{ marginBottom: 16, textAlign: 'center' }}>
          {t('effective_rethinking.you_are_done.text')}
        </Text>

      </View>

      <ResetButton/>
    </ScrollView>
  );
}
