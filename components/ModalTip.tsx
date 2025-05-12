import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable, Image } from 'react-native';
// themes
import { Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '@/hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme';
// language
import { useTranslation } from "react-i18next";

type ModalTipProps = {
    visible: boolean;
    onClose: () => void;
    modalDescription: string;
    modalTitle: string;
    hasImage?: boolean;
    hasTitle?: boolean;
    hasText?: boolean;
  };

export default function ModalTip({
  visible,
  onClose,
  modalDescription,
  modalTitle,
  hasImage = false,
  hasTitle = true,
  hasText = true,
}: ModalTipProps) {
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
            {hasImage && <Image style={{tintColor: Colors.textColor,
                         width: '100%',
                         resizeMode: 'contain',}} source={require('../assets/images/PMREFFTHINKING_EN.png')}/>}
            {hasTitle && <Text style={{fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 12,
                        color: Colors.textColor,}}>
            {modalTitle}
          </Text>}
          {hasText && <Text style={{fontSize: 14,
                       marginBottom: 16,
                       color: Colors.textColor,}}>
            {modalDescription}
          </Text>}

          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={{color: Colors.textAccentBlue, fontWeight: '600',}}>{t('button.close')}</Text>
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
