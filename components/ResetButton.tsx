import { View, Button, Colors } from "react-native-ui-lib"
import { useRouter } from 'expo-router';
import { Themes } from "@/constants/Theme";
import { useTranslation } from "react-i18next";

export default function ResetButton() {
  const { t } = useTranslation();
  const router = useRouter();
  Colors.loadSchemes(Themes);

  return (
  <View style={{ position: 'absolute', top: 50, left: 16 }}>
    <Button
        label={t('button.reset')}
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