import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Image } from 'react-native';

export default function BreathingCircle({centerImage}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const breathingLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.delay(5000), // Hold
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.delay(2000), // Optional relax
      ])
    );
    breathingLoop.start();
    return () => breathingLoop.stop();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.circleWrapper}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        />
        <Image
          source={centerImage} // Replace with your actual PNG path
          style={styles.overlayIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  circleWrapper: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ADD8E6',
    opacity: 0.6,
  },
  overlayIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});
