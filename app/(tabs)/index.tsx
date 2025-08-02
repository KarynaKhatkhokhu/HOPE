import React from 'react';
// ui components
import { Image, StyleSheet, Linking } from 'react-native';
import { Text, View, Colors, TouchableOpacity } from 'react-native-ui-lib';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
// color themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
// translation
import { useTranslation } from "react-i18next";
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
// assets
import brainNsun_50_transparent from '@/assets/images/brainNsun_50_transparent.png';

export default function HomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();

  useThemeRefresh();
  Colors.loadSchemes(Themes);

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: Colors.primaryAccent, dark: Colors.primaryAccent }}
        headerImage={
          <View style={styles.header}>
            <Image
              source={brainNsun_50_transparent}
              style={styles.logo}
            />
          </View>
        }
        bodyBackgroungColor={{ light: Colors.bodyBackground, dark: Colors.bodyBackground}}>


      <View backgroundColor={Colors.screenBG} style={styles.contentContainer}>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)/settingsTab')} style={[styles.titleContainer, {marginBottom:5}]}>
          <IconSymbol name="settings" color={Colors.textColor} size={45} />
          <Text text50 style={{color: Colors.textColor}}>{t('settings.page_title')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)/infoNotice')} style={[styles.titleContainer, {marginBottom:5}]}>
          <IconSymbol name="info" color={Colors.textColor} size={45} />
          <Text text50 style={{color: Colors.textColor}}>{t('index.info_notice.page_title')}</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text text40BO color={Colors.titleColor}>{t("index.welcome")}</Text>
          <HelloWave />
        </View>
  

        <View style={styles.stepContainer}>
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
    </>
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
  settingsButton: {
    position: 'fixed',
    flexDirection: 'row',
    padding: 8,
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
  },  
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // translucent background
  }
});