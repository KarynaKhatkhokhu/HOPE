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
import { useRouter } from 'expo-router';

const getImage = (imageName) => {
  const images = {
    "letter_T.png": require('../../assets/images/letters/letter_T.png'),
    "letter_I.png": require('../../assets/images/letters/letter_I.png'),
    "letter_P.png": require('../../assets/images/letters/letter_P.png'),
  };
  return images[imageName];
};

export default function observationSkill() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);
  
  const { t } = useTranslation();
  const router = useRouter();
  const cardKeys = ['temp', 'exc', 'breath', 'pmr']; 

  return (
    <ScrollView style={{marginTop: 40, backgroundColor: Colors.screenCardsBG}}>
        {cardKeys.map((key, index) => {
          const card = t(`tipp.${key}`, { returnObjects: true });

          const handlePress = key === 'pmr'
          ? () => {
              router.navigate("/(tabs)/PMR");
            }
          : undefined; 

          return (
            <ImageCard
              key={index}
              cardImage={getImage(card.image)}
              cardText={card.text}
              cardTitle={card.title}
              cardBGColor={key === 'pmr' ? Colors.grey20 : Colors.cardBG}
              cardTextColor={Colors.textColor}
              cardOnPress={handlePress}
            />
          );
        })}
    </ScrollView>
  )
};