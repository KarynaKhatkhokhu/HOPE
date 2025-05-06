import { View, Button, Colors } from "react-native-ui-lib"
import { useRouter } from 'expo-router';
import { Themes } from "@/constants/Theme";

export default function ResetButton() {
  const router = useRouter();
  Colors.loadSchemes(Themes);

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