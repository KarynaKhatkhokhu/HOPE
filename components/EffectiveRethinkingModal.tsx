import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable, Image } from 'react-native';
// themes
import { Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '@/hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme';
// language
import { useTranslation } from "react-i18next";

export default function EffectiveRethinkingModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  const { t } = useTranslation();

  return (
    <Modal visible={visible} animationType="slide" transparent>
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
          <Image style={{tintColor: Colors.textColor,
                         width: '100%',
                         resizeMode: 'contain',}} source={require('../assets/images/PMREFFTHINKING_EN.png')}/>
          <Text style={{fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 12,
                        color: Colors.textColor,}}>
            {t("effective_rethinking.title")} 
          </Text>
          <Text style={{fontSize: 14,
                       marginBottom: 16,
                       color: Colors.textColor,}}>
            {t('effective_rethinking.description')}
          </Text>

          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={{color: Colors.textAccentBlue, fontWeight: '600',}}>{t('effective_rethinking.close')}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
