import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Colors } from 'react-native-ui-lib';
import { Stack } from 'expo-router';
import { useThemeRefresh } from '@/hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme';
import {Picker} from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { SUPPORTED_LANGUAGES } from '@/constants/Supported_Languages';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LanguageSettingsScreen() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);

  const { t } = useTranslation();
  
  console.log(AsyncStorage.getItem("language"));

//   const languages = [
//     { label: 'English', value: 'en' },
//     { label: 'Русский', value: 'ru' },
//     { label: 'Українська', value: 'uk' },
//   ];

  const [selectedLanguage, setSelectedLanguage] = useState(AsyncStorage.getItem("language"));

  return (
    <>
      <Stack.Screen options={{ title: t('settings.page_title') }} />
      <View style={styles.container} backgroundColor={Colors.cardBG}>
        <Text text60 style={styles.label} color={Colors.textColor}>
          {t('settings.select_language_title')}
        </Text>

        <Picker
        style={{color: Colors.textColor}}
        dropdownIconColor={Colors.textColor}
        dropdownIconRippleColor={Colors.primaryAccent}
        selectedValue={selectedLanguage}
        selectionColor={Colors.primaryAccent}
        itemStyle={{borderStartColor: Colors.primaryAccent}}
        onValueChange={(itemValue, itemIndex) =>
            {setSelectedLanguage(itemValue);
             console.log(selectedLanguage);
             AsyncStorage.setItem("language", selectedLanguage);
            }
        }>
            {SUPPORTED_LANGUAGES.map((key, index) => {
                return (
                    <Picker.Item label={key.label} value={key.value} color={Colors.textColor} style={{backgroundColor: Colors.screenBG}}/>
                );
            })}
        </Picker>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // justifyContent: 'center',
  },
  label: {
    marginBottom: 12,
  },
//   pickerField: {
//     borderWidth: 1,
//     borderColor: Colors.grey40,
//     borderRadius: 8,
//     padding: 12,
//     width: 220,
//     alignItems: 'center',
//   },
});
