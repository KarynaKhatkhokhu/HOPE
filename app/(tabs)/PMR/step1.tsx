// import React from 'react';
// import { ScrollView, View, Image, Appearance } from 'react-native';
// import { Text, Button, Colors } from 'react-native-ui-lib';
// import { useThemeRefresh } from '../../../hooks/useThemeRefresh';
// import { useTranslation } from "react-i18next";
// import { useRouter } from 'expo-router';
// import ResetButton from '../../../components/ResetButton';
// import BackNextNavigationButtons from '@/components/BackNextNavigationButtons';
// import BreathingCircle from '../../../components/BreathingCircle';
// import { IconSymbol } from '../../../components/ui/IconSymbol';

// export const themes = {
//   light: {
//     screenBG: Colors.grey80,
//     textColor: Colors.black,
//   },
//   dark: {
//     screenBG: Colors.grey10,
//     textColor: Colors.white,
//   },
// };

// const systemColorScheme = Appearance.getColorScheme();
// Colors.setScheme(systemColorScheme);
// Colors.loadSchemes(themes);

// export default function PMRStep1() {
//   useThemeRefresh();
//   Colors.loadSchemes(themes);
  
//   const { t } = useTranslation();
//   const router = useRouter();

//   return (
//     <ScrollView 
//       style={{ backgroundColor: Colors.screenBG }}
//       contentContainerStyle={{ padding: 24, justifyContent: 'center', flexGrow: 1 }}
//     >
//       <ResetButton/>

//       <View style={{ alignItems: 'center', marginBottom: 32 }}>
//         <BreathingCircle
//             centerIcon={
//                 <IconSymbol name="PMR_arms" size={32} color="#333" />
//             }
//         />
//       </View>

//       <Text text60 color={Colors.textColor} style={{ marginBottom: 16, textAlign: 'center' }}>
//         Tense your hands and forearms tightly. Hold for 5 seconds...
//       </Text>

//       <Text text70 color={Colors.textColor} style={{ marginBottom: 24, textAlign: 'center' }}>
//         Now breathe out and release all tension. Let your muscles go soft.
//       </Text>

//       <BackNextNavigationButtons nextPageRoute="/PMR/step2"/>
//       <Text text70 style={{ marginBottom: 24, textAlign: 'center' }}>
//     In each step, you’ll tense a muscle group, hold, then release as you breathe out. 
//     Watch the circle animation to guide your breath and body.
//   </Text>

//       <Text text70 style={{ marginBottom: 16, textAlign: 'center' }}>
//     You can also use a quiet affirmation with each exhale—something real that reminds you you're safe and capable.
//   </Text>
//             <Button 
//               label="Tip: Affirmations"
//               size={Button.sizes.large}
//               backgroundColor={Colors.myButtonColor}
//               color={Colors.textColor}
//               outline={true}
//               outlineColor={Colors.textColor}
//               />
//               <Button 
//               label="Tip: Affirmations"
//               size={Button.sizes.large}
//               backgroundColor={Colors.myButtonColor}
//               color={Colors.textColor}
//               outline={true}
//               outlineColor={Colors.textColor}
//               />
//     </ScrollView>
//   );
// }

import PMRStepScreen from '../../../components/PMRStepScreen';

export default function PMRHandsStep() {
  return (
    <PMRStepScreen
      title="Tense your hands and forearms tightly. Hold for 5 seconds..."
      description="Now breathe out and release all tension. Let your muscles go soft."
      iconName="PMR_arms" // or another appropriate mapped name
      nextRoute="/PMR/step2"
    />
  );
}