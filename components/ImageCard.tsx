import { Card } from 'react-native-ui-lib';

export default function ImageCard({cardText, cardImage, cardTitle, cardBGColor, cardTextColor, cardOnPress = () => {}}) {
    return (
      <Card  width={'98%'} onPress={cardOnPress} enableShadow={true} row={true}
       padding={true}
       style={{margin: 4, backgroundColor: cardBGColor}}>
        <Card.Image
        style={{padding: 4, alignContent: 'center'}}
        width={125}
        height={120}
        source={cardImage}
        resizeMode={'center'}
        />
        <Card.Section
        content={[
          {text: cardTitle, textBreakStrategy: 'highQuality', text60: true, grey10: true, padding: 4, color: cardTextColor},
          {text: cardText, textBreakStrategy: 'highQuality', text70: true, grey10: true, padding: 4, color: cardTextColor}
        ]}
        contentStyle={{alignItems: 'flex-start', marginRight: 150}}
        />
      </Card>
    );
  };