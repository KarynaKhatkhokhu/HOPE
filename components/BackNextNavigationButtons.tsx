import { View, Button, Colors } from "react-native-ui-lib"
import { useRouter } from 'expo-router';

Colors.loadSchemes({
    light: {
      screenBG: Colors.grey80,
      cardBG: Colors.grey80,
      textColor: Colors.black,
      myButtonColor: Colors.grey50,
      myButtonTextColor: Colors.black
    },
    dark: {
      screenBG: Colors.grey10,
      cardBG: Colors.grey10,
      textColor: Colors.white,
      myButtonColor: Colors.black,
      myButtonTextColor: Colors.white
    },
  });

export default function BackNextNavigationButtons({nextPageRoute}) {
  const router = useRouter();

  return (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12 }}>
          <View style={{ flex: 1 }}>
              <Button 
              label="Back" 
              onPress={() => router.dismiss(1)} 
              size={Button.sizes.large}
              backgroundColor={Colors.myButtonColor}
              color={Colors.textColor}
              />
          </View>
  
          <View style={{ flex: 1 }}>
              <Button 
              label="Next" 
              onPress={() => router.navigate(nextPageRoute)} 
              size={Button.sizes.large}
              backgroundColor={Colors.myButtonColor}
              color={Colors.textColor}
              />
          </View>
      </View>
    )
}