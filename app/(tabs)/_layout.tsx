import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import '@/i18n';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '@/hooks/useThemeRefresh';

export default function TabLayout() {
  useThemeRefresh(); // ensures theme stays synced dynamically

  const activeColor = Colors.primaryAccent ?? Colors.textColor;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="squareBreathing"
        options={{
          title: 'Square Breathing',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="PMR"
        options={{
          title: 'PMR',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="PMR" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tippSkill"
        options={{
          title: 'TIPP',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cold" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stopSkill"
        options={{
          title: 'STOP',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="STOP" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settingsTab"
        options={{
          title: 'Settings',
          href: null, 
        }}/>
        <Tabs.Screen
        name="observationSkill"
        options={{
          title: 'Observation Skill',
          href: null, 
        }}/>
      </Tabs>
      
  );
}
