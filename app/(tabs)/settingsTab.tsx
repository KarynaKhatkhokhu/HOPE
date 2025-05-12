import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Text, View, Button } from 'react-native-ui-lib';
import { router, Stack } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

import { useThemeRefresh } from '@/hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme';
import { SUPPORTED_LANGUAGES } from '@/constants/Supported_Languages';
import * as Localization from 'expo-localization';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { getStoredLanguage, setStoredLanguage, clearStoredLanguage } from '@/utils/languageStorage';

export default function LanguageSettingsScreen() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);

  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const lang = await getStoredLanguage();
      setSelectedLanguage(lang ?? i18next.language);
    })();
  }, []);

  const handleSave = async () => {
    if (!selectedLanguage) return;
    try {
      await setStoredLanguage(selectedLanguage);
      await i18next.changeLanguage(selectedLanguage);
    } catch (e) {
      console.error('Failed to save language:', e);
    }
  };

  const handleReset = async () => {
    try {
      await clearStoredLanguage();
      const fallbackLang = Localization.locale.startsWith('ru') ? 'ru-RU'
                          : Localization.locale.startsWith('uk') ? 'uk-UA'
                          : 'en-US';
      i18next.changeLanguage(fallbackLang);
      setSelectedLanguage(fallbackLang);
    } catch (e) {
      console.error('Failed to reset language:', e);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: t('settings.page_title'), headerShown: true }} />
      <View style={[styles.container, { backgroundColor: Colors.cardBG }]}>
        <Text text60 style={styles.label} color={Colors.textColor}>
          {t('settings.select_language_title')}
        </Text>

        <Picker
          mode="dropdown"
          style={{ color: Colors.textColor, margin: 10 }}
          dropdownIconColor={Colors.textColor}
          dropdownIconRippleColor={Colors.primaryAccent}
          selectedValue={selectedLanguage}
          itemStyle={{ borderStartColor: Colors.primaryAccent, margin: 20 }}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <Picker.Item
              key={lang.value}
              label={lang.label}
              value={lang.value}
              color={Colors.textColor}
              style={{ backgroundColor: Colors.screenBG }}
            />
          ))}
        </Picker>

        <View style={styles.buttonRow}>
          <Button
            label={t('button.close')}
            color={Colors.textColor}
            outline
            outlineColor={Colors.textColor}
            style={{marginVertical: 0, flex:1, margin: 5}}
            onPress={() => router.back()}
          />
          <Button
            label={t('button.save')}
            backgroundColor={Colors.primaryAccent}
            color={Colors.textColor}
            outline
            outlineColor={Colors.textColor}
            style={{marginVertical: 0, flex:1, margin: 5, backgroundColor: Colors.buttonColor}}
            onPress={handleSave}
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            label={t('button.reset')}
            backgroundColor={Colors.primaryAccent}
            color={Colors.textColor}
            outline
            outlineColor={Colors.textColor}
            style={{marginVertical: 0, flex:1, margin: 5, backgroundColor: Colors.primaryAccent}}
            onPress={handleReset}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  label: {
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 25,
  }
});
