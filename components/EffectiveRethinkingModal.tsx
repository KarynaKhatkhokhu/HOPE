import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { useTranslation } from "react-i18next";

export default function EffectiveRethinkingModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Image style={styles.illustration} source={require(t('EffectiveRethenking.imageName'))}/>
          <Text style={styles.title}>Effective Rethinking & Paired Relaxation</Text>

          <Text style={styles.text}>
            Combine calming your body with reframing your thoughts.{"\n\n"}
            1. Picture the stressful situation.{"\n"}
            2. Notice what's making it worse.{"\n"}
            3. Say a helpful thought aloud (or in your head) as you exhale and relax.{"\n\n"}
            Example: “I’ve gotten through worse before. So relax.”
          </Text>

          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: Colors.black,
  },
  text: {
    fontSize: 14,
    color: Colors.grey30,
    marginBottom: 16,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  closeText: {
    color: Colors.blue30,
    fontWeight: '600',
  },
  illustration:
  {
    width: '100%' 
  },
});
