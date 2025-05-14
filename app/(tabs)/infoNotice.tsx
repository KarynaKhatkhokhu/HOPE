import React from 'react';
// ui components
import { ScrollView } from 'react-native';
import { Colors, Text } from 'react-native-ui-lib';
// themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
//language
import { useTranslation } from "react-i18next";
import { Stack } from 'expo-router';

export default function infoNotice() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();

  return (
    <>
    <Stack.Screen options={{ title: t('index.info_notice.page_title'), headerShown: true}}/>
    <ScrollView style={{paddingTop: 60, paddingHorizontal: 10, backgroundColor: Colors.screenBG}}>
        <Text text50BO color={Colors.textColor} style={{textAlign:'center', marginBottom: 10}}>{t('index.info_notice.title')}</Text>
        <Text text80 color={Colors.textColor} style={{textAlign:'center', marginBottom: 10}}>{t('index.info_notice.text')}</Text>
    </ScrollView>
    </>
  )
};