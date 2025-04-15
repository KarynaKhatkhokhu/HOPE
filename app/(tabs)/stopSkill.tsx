import React from 'react';
import { Card } from 'react-native-ui-lib';
import cardData from '../../assets/texts/stopCardTexts.json'; 
import { ScrollView } from 'react-native';
import { useEffect } from 'react';
import { Colors } from 'react-native-ui-lib';
import { Appearance } from 'react-native';

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
    "letter_S.png": require('../../assets/images/letters/letter_S.png'),
    "letter_T.png": require('../../assets/images/letters/letter_T.png'),
    "letter_O.png": require('../../assets/images/letters/letter_O.png'),
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
        {text: cardTitle, textBreakStrategy: 'highQuality', text60: true, padding: 4, color: Colors.textColor},
        {text: cardText, textBreakStrategy: 'highQuality', text70: true, padding: 4, color: Colors.textColor}
      ]}
      contentStyle={{alignItems: 'flex-start', marginRight: 150}}
      />
    </Card>
  );
};

export default function StopSkill() {
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      Colors.setScheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);
  
  return (
    <ScrollView style={{marginTop: 40, backgroundColor: Colors.screenBG}}>
      {cardData.map((item, index) => (
        <ImageCard key={index} cardImage={getImage(item.image)} cardText={item.text} cardTitle={item.title}/>
      ))}
    </ScrollView>
  )
};