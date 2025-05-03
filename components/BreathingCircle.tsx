import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export default function BreathingCircle() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const breathingLoop = Animated.loop(
      Animated.sequence([
        // Inhale (expand)
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 4000,
          useNativeDriver: true,
        }),
        // Hold (expanded)
        Animated.delay(5000),
        // Exhale (shrink)
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        // Optional hold (relaxed)
        Animated.delay(2000),
      ])
    );
    breathingLoop.start();

    return () => breathingLoop.stop();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ADD8E6',
    opacity: 0.6,
  },
});
