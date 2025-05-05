import { Stack, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native-ui-lib';
// themes
import { Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '@/hooks/useThemeRefresh';
import { Themes } from '@/constants/Theme';


export default function NotFoundScreen() {
  useThemeRefresh();
  Colors.loadSchemes(Themes);

  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View backgroundColor={Colors.cardBG} style={styles.container}>
        <Text text60 style={{color: Colors.textColor}}>This screen doesn't exist.</Text>
        <TouchableOpacity style={{margin: 10}} onPress={() => router.replace('/(tabs)')}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Text text50 color={Colors.textAccentBlue}>
              Go to home screen!
            </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
