import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Button, Colors, Text, Image } from 'react-native-ui-lib';
import { useThemeRefresh } from '../../../hooks/useThemeRefresh';
import EffectiveRethinkingModal from '../../../components/EffectiveRethinkingModal';
import { useTranslation } from "react-i18next";
import { useRouter } from 'expo-router';
import { Themes } from '@/constants/Theme';

export default function PMRIntro() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView 
      style={{ backgroundColor: Colors.screenBG }} 
      contentContainerStyle={{ padding: 24, justifyContent: 'center', flexGrow: 1 }}
    >
      <View style={{ marginBottom: 0 }}>
        <Text text50 color={Colors.textColor} style={{ fontWeight: 'bold', marginBottom: 16 }}>
          You are Done!
        </Text>
        
        <Text text70 color={Colors.textColor}>
          This short exercise will guide you to release tension in your body and calm your mind. 
          It only takes a few minutes and can help reduce stress and anxiety.
        </Text>

        <View style={{ alignItems: 'center', marginBottom: 32, marginTop: 32 }}>
          <Image
            source={require('../../../assets/images/adaptive-icon.png')} // Replace with your calm illustration
            style={{ width: 200, height: 200, resizeMode: 'contain' }}
          />
        </View>
      
        <Text text60 color={Colors.textColor} style={{ marginBottom: 16, textAlign: 'center' }}>
          Sit or lie down comfortably. Let your hands rest gently.
        </Text>
  
        <Text text70 color={Colors.textColor} style={{ marginBottom: 32, textAlign: 'center' }}>
          Take a moment to settle in before we begin.
        </Text>
      </View>

      <Button
        label="I’m ready"
        onPress={() => router.navigate("/PMR/step1")}
        size={Button.sizes.large}
        backgroundColor={Colors.myButtonColor || Colors.grey60}
        color={Colors.textColor}
      />

      <Button 
        label="Tip: Effective Rethinking"
        size={Button.sizes.large}
        backgroundColor={Colors.myButtonColor}
        color={Colors.textColor}
        outline={true}
        outlineColor={Colors.textColor}
        style={{marginVertical: 10}}
        onPress={() => setModalVisible(true)}
      />
      <EffectiveRethinkingModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </ScrollView>
  );
}
