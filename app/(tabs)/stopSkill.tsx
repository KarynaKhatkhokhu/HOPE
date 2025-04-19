import React from 'react';
import { ScrollView, Appearance } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { useTranslation } from "react-i18next";
import ImageCard from '@/components/ImageCard';


Colors.loadSchemes({
  light: {
    screenBG: Colors.white,
    cardBG: Colors.grey80,
    textColor: Colors.black,
  },
  dark: {
    screenBG: Colors.black,
    cardBG: Colors.grey10,
    textColor: Colors.white,
  },
});

const systemColorScheme = Appearance.getColorScheme();
Colors.setScheme(systemColorScheme);


const getImage = (imageName) => {
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