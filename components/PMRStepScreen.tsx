import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '../hooks/useThemeRefresh';
import { useTranslation } from "react-i18next";
import ResetButton from './ResetButton';
import BackNextNavigationButtons from '@/components/BackNextNavigationButtons';
import BreathingCircle from './BreathingCircle';
import { IconSymbol } from './ui/IconSymbol';
import { Themes } from '@/constants/Theme';

export default function PMRStepScreen({
    title,
    description,
    iconName,
    nextRoute,
  }: {
    title: string;
    description?: string;
    iconName: string;
    nextRoute: string;
  }) {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();
  // const router = useRouter();

  return (
    <ScrollView 
      style={{ backgroundColor: Colors.screenBG }}
      contentContainerStyle={{ padding: 24, justifyContent: 'center', flexGrow: 1 }}
    >
      <ResetButton/>

      <View style={{ alignItems: 'center', marginBottom: 32 }}>
        <BreathingCircle
            centerIcon={
                <IconSymbol name={iconName} size={32} color="#333" />
            }
        />
      </View>

      <Text text60 color={Colors.textColor} style={{ marginBottom: 16, textAlign: 'center' }}>
        {title}
      </Text>

      <Text text70 color={Colors.textColor} style={{ marginBottom: 24, textAlign: 'center' }}>
        {description}
      </Text>

      <BackNextNavigationButtons nextPageRoute={nextRoute}/>
    </ScrollView>
  );
}
