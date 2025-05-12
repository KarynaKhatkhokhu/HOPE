import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = 'language';

export const getStoredLanguage = async () => {
  return await AsyncStorage.getItem(LANGUAGE_KEY);
};

export const setStoredLanguage = async (lang: string) => {
  await AsyncStorage.setItem(LANGUAGE_KEY, lang);
};

export const clearStoredLanguage = async () => {
  await AsyncStorage.removeItem(LANGUAGE_KEY);
};
