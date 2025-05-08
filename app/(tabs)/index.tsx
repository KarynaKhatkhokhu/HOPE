import React from 'react';
// ui components
import { Image, StyleSheet, Linking, Appearance } from 'react-native';
import { Text, View, Colors, TouchableOpacity, SchemeType } from 'react-native-ui-lib';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
// color themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
// translation
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const { t } = useTranslation();

  useThemeRefresh();
  Colors.loadSchemes(Themes);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.primaryAccent, dark: Colors.primaryAccent }}
      headerImage={
        <Image
          source={require('@/assets/images/brainNsun_50_transparent.png')}
          style={styles.logo}
        />
      }
      bodyBackgroungColor={{ light: Colors.bodyBackground, dark: Colors.bodyBackground}}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text text40BO color={Colors.titleColor}>{t("index.welcome")}</Text>
          <HelloWave />
        </View>

        <View style={styles.stepContainer}>
          <Text text50M color={Colors.titleColor}>{t("index.welcome_to")}</Text>
          <Text text60M color={Colors.textColor}>
            {t("index.intro")}
          </Text>
        </View>

    <View style={styles.footer}>
      <View style={styles.inlineText}>
        <Text style={{ color: Colors.textColor }}>© 2025 </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/yuliya-kyrychenko-329b2918b/')}>
          <Text style={{ color: Colors.textAccentBlue }}>
            AveBrain
          </Text>
        </TouchableOpacity>
        <Text style={{ color: Colors.textColor }}> & </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/KarynaKhatkhokhu')}>
          <Text style={{ color: Colors.textAccentPurple }}>
            RestlessSun
          </Text>
        </TouchableOpacity>
        <Text style={{ color: Colors.textColor }}>, MIT Licensed</Text>
        </View>
      </View>
    </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  logo: {
    height: '110%',
    width: '150%',
    bottom: 0,
    left: 0,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    borderRadius: 10
  },
  footer: {
    height: 100,
    justifyContent: 'flex-end',
  },
  inlineText: {
    flexDirection: 'row'
  }
});