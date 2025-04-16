import React from 'react';
import { Image, Platform, StyleSheet, ScrollView } from 'react-native';
import { Text, View, Colors } from 'react-native-ui-lib';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useThemeRefresh } from '../../hooks/useThemeRefresh';

export const themes = {
  light: {
    headerBackground: '#BCA1DC',
    bodyBackground: Colors.grey80,
    titleColor: Colors.black,
    textColor: Colors.grey90,
  },
  dark: {
    headerBackground: '#321D47',
    bodyBackground: Colors.grey10,
    titleColor: Colors.white,
    textColor: Colors.grey70,
  },
};

Colors.loadSchemes(themes);

export default function HomeScreen() {
  useThemeRefresh();
  Colors.loadSchemes(themes);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.headerBackground, dark: Colors.headerBackground }}
      headerImage={
        <Image
          source={require('@/assets/images/purple_sun_graphic_11.png')}
          style={styles.logo}
        />
      }
      bodyBackgroungColor={{ light: Colors.bodyBackground, dark: Colors.bodyBackground}}>
      <View style={styles.titleContainer}>
        <Text text40BO color={Colors.titleColor}>Welcome!</Text>
        <HelloWave />
      </View>

      <View style={styles.stepContainer}>
        <Text text50M color={Colors.titleColor}>To your DBT helper</Text>
        <Text text60M color={Colors.textColor}>
          This application is a DBT shorthand, meant to be easily accessable during episodes, panic attacks, and so on. To learn how to use these skills in more depth, we recommend refering to Marsha M. Linehan's DBT Handouts.
        </Text>
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
});