import { View, Button, Colors } from "react-native-ui-lib"
import { useRouter } from 'expo-router';
import { Themes } from "@/constants/Theme";
import { useTranslation } from "react-i18next";

export default function BackNextNavigationButtons({nextPageRoute}) {
  const { t } = useTranslation();
  const router = useRouter();
  Colors.loadSchemes(Themes);

  return (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12 }}>
          <View style={{ flex: 1 }}>
              <Button 
              label={t('button.back')}
              onPress={() => router.dismiss(1)} 
              size={Button.sizes.large}
              backgroundColor={Colors.myButtonColor}
              color={Colors.textColor}
              />
          </View>
  
          <View style={{ flex: 1 }}>
              <Button 
              label={t('button.next')} 
              onPress={() => router.navigate(nextPageRoute)} 
              size={Button.sizes.large}
              backgroundColor={Colors.myButtonColor}
              color={Colors.textColor}
              />
          </View>
      </View>
    )
}