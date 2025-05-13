// app/modal-tip.tsx
import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { Colors } from 'react-native-ui-lib';

export default function ModalTipScreen() {
  const { title, description, image } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.modalOverlayColor, padding: 24, justifyContent: 'center' }}>
      <View style={{ backgroundColor: Colors.cardBG, borderRadius: 12, padding: 24 }}>
        <ScrollView>
          {/* {image && (
            <Image
              source={
                typeof image === 'string'
                  ? require(`../assets/images/${image}.png`) // must be static at build time
                  : undefined
              }
              style={{ width: '100%', height: 120, resizeMode: 'contain', tintColor: Colors.textColor }}
            />
          )} */}
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12, color: Colors.textColor }}>
            {title}
          </Text>
          <Text style={{ fontSize: 16, color: Colors.textColor }}>{description}</Text>
        </ScrollView>
        <Pressable onPress={() => router.back()} style={{ marginTop: 16 }}>
          <Text style={{ color: Colors.textAccentBlue, fontWeight: '600' }}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
}
