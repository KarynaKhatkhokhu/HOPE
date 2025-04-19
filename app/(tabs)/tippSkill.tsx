import React from 'react';
import { ScrollView, Appearance } from 'react-native';
import { Card, Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '../../hooks/useThemeRefresh';
import { useTranslation } from "react-i18next";

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

const colorScheme = Appearance.getColorScheme();
Colors.setScheme(colorScheme);

const getImage = (imageName) => {
  const images = {
    "letter_T.png": require('../../assets/images/letters/letter_T.png'),
    "letter_I.png": require('../../assets/images/letters/letter_I.png'),
    "letter_P.png": require('../../assets/images/letters/letter_P.png'),
  };
  return images[imageName];
};

const ImageCard = ({cardText, cardImage, cardTitle}) => {
  return (
    <Card  width={'98%'} onPress={() => console.log('pressed')} enableShadow={true} row={true}
     padding={true}
     style={{margin: 4, backgroundColor: Colors.cardBG}}>
      <Card.Image
      style={{padding: 4, alignContent: 'center'}}
      width={125}
      height={120}
      source={cardImage}
      resizeMode={'center'}
      />
      <Card.Section
      content={[
        {text: cardTitle, textBreakStrategy: 'highQuality', text60: true, grey10: true, padding: 4, color: Colors.textColor},
        {text: cardText, textBreakStrategy: 'highQuality', text70: true, grey10: true, padding: 4, color: Colors.textColor}
      ]}
      contentStyle={{alignItems: 'flex-start', marginRight: 150}}
      />
    </Card>
  );
};

export default function TippSkill() {
  useThemeRefresh();
  
  const { t } = useTranslation();
  const cardKeys = ['temp', 'exc', 'breath', 'pmr']; 

  return (
    <ScrollView style={{marginTop: 40, backgroundColor: Colors.screenBG}}>
        {cardKeys.map((key, index) => {
          const card = t(`tipp.${key}`, { returnObjects: true });
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

