import React from 'react';
// ui components
import { ScrollView } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import ImageCard from '@/components/ImageCard';
// themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
//language
import { useTranslation } from "react-i18next";
import { useRouter } from 'expo-router';
// assets
import letter_S from '../../assets/images/letters/letter_S.png';
import letter_P from '../../assets/images/letters/letter_P.png';
import letter_T from '../../assets/images/letters/letter_T.png';
import letter_O from '../../assets/images/letters/letter_O.png';

const getImage = (imageName) => {
  const images = {
    "letter_S.png": letter_S,
    "letter_T.png": letter_T,
    "letter_O.png": letter_O,
    "letter_P.png": letter_P,
  };
  return images[imageName];
};

export default function StopSkill() {
  useThemeRefresh();
  const router = useRouter();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();
  const cardKeys = ['stop', 'step', 'obsrv', 'pm'];

  return (
    <ScrollView style={{marginTop: 40, backgroundColor: Colors.screenCardsBG}}>
      {cardKeys.map((key, index) => {
        const card = t(`stop.${key}`, { returnObjects: true });

        const handlePress = key === 'obsrv'
          ? () => {
              router.navigate("/(tabs)/observationSkill");
            }
          : undefined; 

        return (
          <ImageCard
            key={index}
            cardImage={getImage(card.image)}
            cardText={card.text}
            cardTitle={card.title}
            cardBGColor={key === 'obsrv' ? Colors.secondary : Colors.cardBG}
            cardTextColor={Colors.textColor}
            cardOnPress={handlePress}
          />
        );
      })}
    </ScrollView>
  )
};