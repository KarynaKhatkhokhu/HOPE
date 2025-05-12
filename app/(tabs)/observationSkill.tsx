import React from 'react';
// ui components
import { ScrollView } from 'react-native';
import { Colors, Text } from 'react-native-ui-lib';
import ImageCardObsrv from '@/components/ImageCardObsrv';
// themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
//language
import { useTranslation } from "react-i18next";

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
  const cardKeys = ['five', 'four', 'three', 'two', 'one']; 

  return (
    <ScrollView style={{marginTop: 40, backgroundColor: Colors.screenCardsBG}}>
        <Text text50BO color={Colors.textColor} style={{textAlign:'center', marginBottom: 10}}>{t('obsrv.title')}</Text>
        {cardKeys.map((key, index) => {
          const card = t(`obsrv.${key}`, { returnObjects: true });
          return (
            <ImageCardObsrv
              key={index}
              cardImage={getImage(key+'.png')}
              cardTitle={card.title}
              cardBGColor={Colors.cardBG}
              cardTextColor={Colors.textColor}
              cardTint={Colors.textColor}
            />
          );
        })}
    </ScrollView>
  )
};