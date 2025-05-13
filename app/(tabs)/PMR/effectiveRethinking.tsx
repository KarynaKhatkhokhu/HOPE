import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
// themes
import { Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '@/hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme';
// language
import { useTranslation } from "react-i18next";
import { router } from 'expo-router';

export default function EffectiveRethinkingModal() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  const { t } = useTranslation();

  return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.modalOverlayColor ?? 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            padding: 24,
            }}>
                <View style={{
                    backgroundColor: Colors.cardBG ?? '#fff',
                    borderRadius: 20,
                    padding: 24,
                    maxHeight: '90%',
                }}>
            <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
          <Image style={{tintColor: Colors.textColor,
                         width: '100%',
                         resizeMode: 'contain',}} source={require('../../../assets/images/PMREFFTHINKING_EN.png')}/>
          <Text style={{fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 12,
                        color: Colors.textColor,}}>
            {t("effective_rethinking.title")} 
          </Text>
          <Text style={{fontSize: 14,
                       marginBottom: 16,
                       color: Colors.textColor,}}>
            {t('effective_rethinking.image_annotation')}
            {"\n"}
            {t('effective_rethinking.description')}
          </Text>
          </ScrollView>
        <View style={styles.closeButtonContainer}>
          <Pressable onPress={() => {router.back()}} style={styles.closeButton}>
            <Text style={{color: Colors.textAccentBlue, fontWeight: '600',}}>{t('button.close')}</Text>
          </Pressable>
          </View>
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
  scrollContent: {
    paddingBottom: 16,
  },
});
