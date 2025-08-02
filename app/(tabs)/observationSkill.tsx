import React from 'react';
// ui components
import { ScrollView } from 'react-native';
import { Colors, Text } from 'react-native-ui-lib';
import ImageCardObsrv from '@/components/ImageCardObsrv';
// themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
// language
import { useTranslation } from "react-i18next";
// assets
import five from '../../assets/images/obsrv/five.png';
import four from '../../assets/images/obsrv/four.png';
import three from '../../assets/images/obsrv/three.png';
import two from '../../assets/images/obsrv/two.png';
import one from '../../assets/images/obsrv/one.png';

const getImage = (imageName) => {
  const images = {
    "five.png": five,
    "four.png": four,
    "three.png": three,
    "two.png": two,
    "one.png": one,
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