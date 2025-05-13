import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
// themes
import { Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '@/hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme';
// language
import { useTranslation } from "react-i18next";
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ModalTip() {
  const { modalDescription, modalTitle, hasTitle, hasText  } = useLocalSearchParams();  

  const titleShown = hasTitle !== 'false'; // default true
  const textShown = hasText !== 'false';   // default true
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  const { t } = useTranslation();
  const router = useRouter();

  return (
      <View style={{flex: 1,
                  backgroundColor: Colors.modalOverlayColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 24,}}>
        <View style={{backgroundColor: Colors.cardBG,
                      borderRadius: 12,
                      padding: 24,
                      width: '100%',
                      maxWidth: 400,}}>
            {titleShown && <Text style={{fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 12,
                        color: Colors.textColor,}}>
            {modalTitle}
          </Text>}
          {textShown && <Text style={{fontSize: 14,
                       marginBottom: 16,
                       color: Colors.textColor,}}>
            {modalDescription}
          </Text>}

          <Pressable onPress={()=> {router.back()}} style={styles.closeButton}>
            <Text style={{color: Colors.textAccentBlue, fontWeight: '600',}}>{t('button.close')}</Text>
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
