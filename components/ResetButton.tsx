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

export default function ResetButton() {
  const router = useRouter();

  return (
  <View style={{ position: 'absolute', top: 30, left: 16 }}>
    <Button
        label="Reset"
        onPress={() => router.dismissAll()}
        size={Button.sizes.small}
        backgroundColor="transparent"
        outline
        outlineColor={Colors.textColor}
        color={Colors.textColor}
        labelStyle={{ color: Colors.textColor, opacity: 0.5 }}
    />
  </View>)
}