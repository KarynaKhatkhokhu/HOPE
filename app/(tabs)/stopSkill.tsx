import React from 'react';
// ui components
import { ScrollView, Appearance } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import ImageCard from '@/components/ImageCard';
// themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
//language
import { useTranslation } from "react-i18next";

const getImage = (imageName: String) => {
  const images = {
    "letter_S.png": require('../../assets/images/letters/letter_S.png'),
    "letter_T.png": require('../../assets/images/letters/letter_T.png'),
    "letter_O.png": require('../../assets/images/letters/letter_O.png'),
    "letter_P.png": require('../../assets/images/letters/letter_P.png'),
  };
  return images[imageName];
};

export default function StopSkill() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();
  const cardKeys = ['stop', 'step', 'obsrv', 'pm'];

  return (
    <ScrollView style={{marginTop: 40, backgroundColor: Colors.screenBG}}>
      {cardKeys.map((key, index) => {
        const card = t(`stop.${key}`, { returnObjects: true });
        return (
          <ImageCard
            key={index}
            cardImage={getImage(card.image)}
            cardText={card.text}
            cardTitle={card.title}
          />
        );
      })}
    </ScrollView>
  )
};