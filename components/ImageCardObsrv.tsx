import { Card } from 'react-native-ui-lib';

export default function ImageCardObsrv({cardImage, cardTitle, cardBGColor, cardTextColor,  cardTint = "", cardOnPress = () => {}}) {
    return (
      <Card  width={'98%'} onPress={cardOnPress} enableShadow={true} row={true} 
       padding={true}
       style={{margin: 4, backgroundColor: cardBGColor, minHeight: 120,}}>
        <Card.Image
        style={{padding: 4, alignContent: 'center',}}
        width={125}
        height={120}
        source={cardImage}
        resizeMode={'center'}
        tintColor={cardTint}
        />
        <Card.Section
        content={[
          {text: cardTitle, textBreakStrategy: 'highQuality', text60: true, grey10: true, padding: 4, color: cardTextColor},
        ]}
        contentStyle={{alignItems: 'flex-start', marginRight: 150, marginTop: 20}}
        />
      </Card>
    );
  };