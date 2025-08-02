import React from 'react';
// ui components
import { ScrollView, Image, View } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import ImageCard from '@/components/ImageCard';
// themes
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme'
//language
import { useTranslation } from "react-i18next";
import { useRouter } from 'expo-router';
// assests
import letter_P from '../../assets/images/letters/letter_P.png';
import letter_I from '../../assets/images/letters/letter_I.png';
import letter_T from '../../assets/images/letters/letter_T.png';
import ice_tasik from '../../assets/images/ice_tasik.png';
import cold_shower from '../../assets/images/shower.png';

const getImage = (imageName) => {
  const images = {
    "letter_T.png": letter_T,
    "letter_I.png": letter_I,
    "letter_P.png": letter_P,
  };
  return images[imageName];
};

export default function TippSkill() {
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
          <View key={index}>
            <ImageCard
              cardImage={getImage(card.image)}
              cardText={card.text}
              cardTitle={card.title}
              cardBGColor={key === 'pmr' ? Colors.secondary : Colors.cardBG}
              cardTextColor={Colors.textColor}
              cardOnPress={handlePress}
            />
            {index === 0 && (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
    <Image
      source={ice_tasik}
      style={{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        // tintColor: 'white'
      }}
    />
    <Image
      source={cold_shower}
      style={{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        tintColor: 'white'
      }}
    />
  </View>
)}
          </View>
        );
        })}
    </ScrollView>
  )
};