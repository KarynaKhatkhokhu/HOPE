import { Stack } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function PMRLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="step1" options={{}} />
    </Stack>
  );
}

PMRLayout.options = {
  title: 'PMR',
  tabBarIcon: ({ color }) => <IconSymbol size={28} name="PMR" color={color} />,
};
