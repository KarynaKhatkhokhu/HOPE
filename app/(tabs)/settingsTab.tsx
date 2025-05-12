import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Button,Text, View } from 'react-native-ui-lib';
import { router, Stack } from 'expo-router';
import { useThemeRefresh } from '@/hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme';
import {Picker} from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { SUPPORTED_LANGUAGES } from '@/constants/Supported_Languages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HorizontalAlignment } from 'react-native-ui-lib/src/components/gridListItem';

export default function LanguageSettingsScreen() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);

  const { t } = useTranslation();
  
//   console.log(AsyncStorage.getItem("language"));

//   const languages = [
//     { label: 'English', value: 'en' },
//     { label: 'Русский', value: 'ru' },
//     { label: 'Українська', value: 'uk' },
//   ];

//   const [selectedLanguage, setSelectedLanguage] = useState(AsyncStorage.getItem("language"));
    const [selectedLanguage, setSelectedLanguage] = useState();

    // useEffect(() => {
    // AsyncStorage.getItem("language").then((lang) => {
    //     if (lang) setSelectedLanguage(lang);
    // });
    // }, []);

  return (
    <>
      <Stack.Screen options={{ title: t('settings.page_title'), headerShown: true, headerBackVisible: true}} />
      <View style={[styles.container, { backgroundColor: Colors.cardBG }]}>
        <Text text60 style={styles.label} color={Colors.textColor}>
          {t('settings.select_language_title')}
        </Text>

        <Picker
        mode="dropdown"
        style={{color: Colors.textColor, margin: 10}}
        dropdownIconColor={Colors.textColor}
        dropdownIconRippleColor={Colors.primaryAccent}
        selectedValue={selectedLanguage}
        itemStyle={{borderStartColor: Colors.primaryAccent, margin:20}}
        onValueChange={(itemValue, itemIndex) =>
            {setSelectedLanguage(itemValue);
             console.log(selectedLanguage);
            }
        }>
            {SUPPORTED_LANGUAGES.map((key, index) => {
                return (
                    <Picker.Item key={index} label={key.label} value={key.value} color={Colors.textColor} style={{backgroundColor: Colors.screenBG}}/>
                );
            })}
        </Picker>

      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
            onPress={() => {
                console.log('Touchable Pressed');
            }}
            style={{
              flex:1,
                marginTop: 20,
                padding: 12,
                backgroundColor: Colors.primaryAccent,
                borderRadius: 8,
        }}
        >
            <Text style={{ color: Colors.textColor }}>{t('button.save')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {
                router.back();
            }}
            style={{
              flex:1,
                marginTop: 20,
                padding: 12,
                backgroundColor: Colors.primaryAccent,
                borderRadius: 8,
        }}
        >
            <Text style={{ color: Colors.textColor }}>{t('button.close')}</Text>
        </TouchableOpacity>
        </View>
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
