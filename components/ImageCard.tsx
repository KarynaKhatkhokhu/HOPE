import { Card, Colors } from 'react-native-ui-lib';

export default function ImageCard({cardText, cardImage, cardTitle}) {
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