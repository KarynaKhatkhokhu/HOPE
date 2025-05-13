import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Button, Colors, Text, Image } from 'react-native-ui-lib';
import { useTranslation } from "react-i18next";
import { useRouter } from 'expo-router';
import { Themes } from '@/constants/Theme';
import { useThemeRefresh } from '../../../hooks/useThemeRefresh';
import EffectiveRethinkingModal from '../../../components/EffectiveRethinkingModal';

export default function PMRIntro() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();
  const router = useRouter();

  const [erVisible, setErVisible] = useState(false);

  return (
    <ScrollView 
      style={{ backgroundColor: Colors.screenBG, paddingTop: 15 }} 
      contentContainerStyle={{ padding: 24, justifyContent: 'center', flexGrow: 1 }}
    >
      <View style={{ marginBottom: 0 }}>
        <Text text50 color={Colors.textColor} style={{ fontWeight: 'bold', marginBottom: 16 }}>
          {t('progressive_muscle_relaxation.index_title')}
        </Text>
        
        <Text text70 color={Colors.textColor}>
          {t('progressive_muscle_relaxation.description')}
        </Text>

        <View style={{ alignItems: 'center', marginBottom: 32, marginTop: 32 }}>
          <Image
            source={require('../../../assets/images/figure_v1.png')}
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
            tintColor={Colors.textColor}
          />
        </View>
      
        <Text text60 color={Colors.textColor} style={{ marginBottom: 16, textAlign: 'center' }}>
          {t('progressive_muscle_relaxation.instruction')}          
        </Text>
  
        <Text text70 color={Colors.textColor} style={{ marginBottom: 32, textAlign: 'center' }}>
        {t('progressive_muscle_relaxation.take_a_moment')}
        </Text>
      </View>

      <Button
        label={t('button.imready')}
        onPress={() => router.navigate("/PMR/step1")}
        size={Button.sizes.large}
        backgroundColor={Colors.primaryAccent}
        color={Colors.textColor}
        outlineColor={Colors.textColor}
      />

      <Button 
        label={t('button.tip_effective_rethinking')}
        size={Button.sizes.large}
        backgroundColor={Colors.myButtonColor}
        color={Colors.textColor}
        outline={true}
        outlineColor={Colors.textColor}
        style={{marginVertical: 10}}
        onPress={() => setErVisible(true)}
      />

      <EffectiveRethinkingModal visible={erVisible} onClose={() => setErVisible(false)} />
        <Button 
          label={t('button.tip_effective_rethinking')}
          size={Button.sizes.large}
          backgroundColor={Colors.myButtonColor}
          color={Colors.textColor}
          outline={true}
          outlineColor={Colors.textColor}
          style={{marginVertical: 10}}
          onPress={() => router.navigate("/(tabs)/PMR/effectiveRethinking")}
/>
    </ScrollView>
  );
}
