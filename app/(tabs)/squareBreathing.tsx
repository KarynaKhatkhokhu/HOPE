import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  useColorScheme,
  Appearance,
} from 'react-native';
import {View, Colors } from 'react-native-ui-lib';
import { useThemeRefresh } from '../../hooks/useThemeRefresh';

export const themes = {
  light: {
    screenBG: Colors.grey80,
    textColor: Colors.black,
    secondary: Colors.grey60,
    accentColor: Colors.black,
    buttonColor: Colors.grey50,
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
    secondary: Colors.grey20,
    accentColor: Colors.white,
    buttonColor: Colors.black,
  },
};

const systemColorScheme = Appearance.getColorScheme();
Colors.setScheme(systemColorScheme);
Colors.loadSchemes(themes);
// console.log(systemColorScheme)
// console.log('   ')
// console.log(Colors.screenBG)

export default function SquareBreathingTimer() {
  // const currentScheme = systemColorScheme || 'light';
  useThemeRefresh();
  Colors.loadSchemes(themes);

  const [currentPhase, setCurrentPhase] = useState('Inhale');
  const [timeLeft, setTimeLeft] = useState(4);
  const [isRunning, setIsRunning] = useState(false);

  const phases = ['Inhale', 'Hold_1', 'Exhale', 'Hold_2'];
  const duration = 4;
  const sideAnim = useRef(new Animated.Value(0)).current;

  const sound = useRef(null);

  const playSound = async (phase) => {
    if (!sound.current) return;
    try {
      await sound.current.unloadAsync();
      const audioFile =
        phase === 'Inhale'
          ? require('/../../../assets/breathChime.ogg')
          : phase === 'Exhale'
          ? require('../../assets/breathChime.ogg')
          : null;

      if (audioFile) {
        await sound.current.loadAsync(audioFile);
        await sound.current.playAsync();
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      Colors.setScheme(colorScheme);
    });

    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      const nextPhaseIndex = (phases.indexOf(currentPhase) + 1) % phases.length;
      const nextPhase = phases[nextPhaseIndex];

      playSound(nextPhase);

      Animated.timing(sideAnim, {
        toValue: nextPhaseIndex === 0 ? 4 : nextPhaseIndex,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        if (nextPhaseIndex === 0) {
          sideAnim.setValue(0);
        }
      });

      setCurrentPhase(nextPhase);
      setTimeLeft(duration);
    }

    return () => {
      clearInterval(timer);
      subscription.remove();
    };
  }, [isRunning, timeLeft, currentPhase]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setCurrentPhase('Inhale');
    setTimeLeft(duration);
    sideAnim.setValue(0);
  };

  const getSquareStyles = (side) => {
    const backgroundColor = sideAnim.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange:
        side === 0
          ? [Colors.accentColor, Colors.secondary, Colors.secondary, Colors.secondary, Colors.accentColor]
          : side === 1
          ? [Colors.secondary, Colors.accentColor, Colors.secondary, Colors.secondary, Colors.secondary]
          : side === 2
          ? [Colors.secondary, Colors.secondary, Colors.accentColor, Colors.secondary, Colors.secondary]
          : [Colors.secondary, Colors.secondary, Colors.secondary, Colors.accentColor, Colors.secondary],
    });

    return { backgroundColor };
  };

  const displayPhase = (phase) =>
    phase === 'Hold_1' || phase === 'Hold_2' ? 'Hold' : phase;

  const themedStyles = getThemedStyles(systemColorScheme);

  
  // console.log(systemColorScheme)
  // console.log(Colors.screenBG)
  return (
    <View style={[themedStyles.container, { backgroundColor: Colors.screenBG }]}>
      <Text style={themedStyles.title}>{String(Colors.screenBG)} Square Breathing</Text>

      <View style={themedStyles.squareContainer}>
        <Animated.View style={[themedStyles.side, themedStyles.top, getSquareStyles(0)]} />
        <Animated.View style={[themedStyles.side, themedStyles.right, getSquareStyles(1)]} />
        <Animated.View style={[themedStyles.side, themedStyles.bottom, getSquareStyles(2)]} />
        <Animated.View style={[themedStyles.side, themedStyles.left, getSquareStyles(3)]} />
      </View>

      <View style={themedStyles.timerContainer}>
        <Text style={themedStyles.phase}>{displayPhase(currentPhase)}</Text>
        <Text style={themedStyles.time}>{timeLeft}s</Text>
      </View>

      <View style={themedStyles.controls}>
        {!isRunning ? (
          <TouchableOpacity onPress={startTimer} style={themedStyles.button}>
            <Text style={themedStyles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={pauseTimer} style={themedStyles.button}>
            <Text style={themedStyles.buttonText}>Pause</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={resetTimer} style={themedStyles.button}>
          <Text style={themedStyles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getThemedStyles = (scheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: Colors.textColor,
    },
    squareContainer: {
      position: 'relative',
      width: 200,
      height: 200,
      marginBottom: 40,
    },
    side: {
      position: 'absolute',
      backgroundColor: Colors.secondary,
    },
    top: {
      top: 0,
      left: 0,
      right: 0,
      height: 10,
    },
    right: {
      top: 0,
      bottom: 0,
      right: 0,
      width: 10,
    },
    bottom: {
      bottom: 0,
      left: 0,
      right: 0,
      height: 10,
    },
    left: {
      top: 0,
      bottom: 0,
      left: 0,
      width: 10,
    },
    timerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    phase: {
      fontSize: 32,
      fontWeight: '600',
      marginBottom: 10,
      color: Colors.textColor,
    },
    time: {
      fontSize: 48,
      fontWeight: 'bold',
      color: Colors.textColor,
    },
    controls: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
    },
    button: {
      padding: 15,
      backgroundColor: Colors.buttonColor,
      borderRadius: 10,
      alignItems: 'center',
      marginHorizontal: 5,
    },
    buttonText: {
      color: Colors.textColor,
      fontSize: 18,
      fontWeight: '600',
    },
  });


