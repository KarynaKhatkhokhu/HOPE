import React from 'react';
// ui components
import { ScrollView } from 'react-native';
import { Colors, Text } from 'react-native-ui-lib';
import ImageCard from '@/components/ImageCard';
// themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
//language
import { useTranslation } from "react-i18next";
import { useRouter } from 'expo-router';

const getImage = (imageName) => {
  const images = {
    "five.png": require('../../assets/images/obsrv/five.png'),
    "four.png": require('../../assets/images/obsrv/four.png'),
    "three.png": require('../../assets/images/obsrv/three.png'),
    "two.png": require('../../assets/images/obsrv/two.png'),
    "one.png": require('../../assets/images/obsrv/one.png'),
  };
  return images[imageName];
};

export default function observationSkill() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();
  const router = useRouter();
  const cardKeys = ['five', 'four', 'three', 'two', 'one']; 

  return (
    <ScrollView style={{marginTop: 40, backgroundColor: Colors.screenCardsBG}}>
        <Text text50BO style={{textAlign:'center', marginBottom: 10}}>{t('obsrv.title')}</Text>
        {cardKeys.map((key, index) => {
          const card = t(`obsrv.${key}`, { returnObjects: true });
          return (
            <ImageCard
              key={index}
              cardImage={getImage(key+'.png')}
              cardText={card.text}
              cardTitle={card.title}
              cardBGColor={Colors.cardBG}
              cardTextColor={Colors.textColor}
            />
          );
        })}
    </ScrollView>
  )
};