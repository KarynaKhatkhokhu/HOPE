import React from 'react';
import { Card } from 'react-native-ui-lib';
import cardData from '../../assets/texts/tippCardTexts.json'; 
import { ScrollView } from 'react-native';

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
     style={{margin: 4}}>
      <Card.Image
      style={{padding: 4, alignContent: 'center'}}
      width={125}
      height={120}
      source={cardImage}
      resizeMode={'center'}
      />
      <Card.Section
      content={[
        {text: cardTitle, textBreakStrategy: 'highQuality', text60: true, grey10: true, padding: 4},
        {text: cardText, textBreakStrategy: 'highQuality', text70: true, grey10: true, padding: 4}
      ]}
      contentStyle={{alignItems: 'flex-start', marginRight: 150}}
      />
    </Card>
  );
};

export default function TippSkill() {
  return (
    <ScrollView style={{marginTop: 40}}>
      {cardData.map((item, index) => (
        <ImageCard key={index} cardImage={getImage(item.image)} cardText={item.text} cardTitle={item.title}/>
      ))}
    </ScrollView>
  )
};