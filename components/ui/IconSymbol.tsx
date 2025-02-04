// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Add your SFSymbol to icon library mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': { library: MaterialIcons, name: 'home' },
  'paperplane.fill': { library: MaterialIcons, name: 'send' },
  'chevron.left.forwardslash.chevron.right': { library: MaterialIcons, name: 'code' },
  'chevron.right': { library: MaterialIcons, name: 'chevron-right' },
  'square': { library: MaterialIcons, name: 'square' },
  'STOP': { library: Feather, name: 'octagon' },
  'cold': { library: MaterialCommunityIcons, name: 'thermometer-low' } 
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    {
      library: typeof MaterialIcons | typeof Feather | typeof MaterialCommunityIcons; // Add other libraries as needed
      name: string;
    }
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and the mapped icon library (MaterialIcons, Feather, MaterialCommunityIcons) on Android and web. 
 * This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to their respective icon library.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const mapping = MAPPING[name];
  if (!mapping) {
    console.warn(`Icon "${name}" is not mapped to any icon library.`);
    return null;
  }

  const IconLibrary = mapping.library;
  return <IconLibrary color={color} size={size} name={mapping.name} style={style} />;
}