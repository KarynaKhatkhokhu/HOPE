import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';

const accentColor = '#000';

const SquareBreathingTimer = () => {
  const [currentPhase, setCurrentPhase] = useState('Inhale'); // 'Inhale', 'Hold_1', 'Exhale', 'Hold_2'
  const [timeLeft, setTimeLeft] = useState(4); // Default duration for each phase
  const [isRunning, setIsRunning] = useState(false); // Tracks if the timer is running

  const phases = ['Inhale', 'Hold_1', 'Exhale', 'Hold_2']; // Sequence of phases
  const duration = 4; // Duration for each phase in seconds

  // Animations for each side
  const sideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      const nextPhaseIndex = (phases.indexOf(currentPhase) + 1) % phases.length;
      const nextPhase = phases[nextPhaseIndex];

      Animated.timing(sideAnim, {
        toValue: nextPhaseIndex === 0 ? 4 : nextPhaseIndex, // If wrapping around, go to "4"
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        if (nextPhaseIndex === 0) {
          // Reset animation back to 0 when wraparound is complete
          sideAnim.setValue(0);
        }
      });

      setCurrentPhase(nextPhase);
      setTimeLeft(duration);
    }

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [isRunning, timeLeft, currentPhase]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setCurrentPhase('Inhale');
    setTimeLeft(duration);
    sideAnim.setValue(0); // Reset animation to the initial phase
  };

  const getSquareStyles = (side) => {
    // Map the side index to highlight color using interpolation
    const backgroundColor = sideAnim.interpolate({
      inputRange: [0, 1, 2, 3, 4], // Add "4" to handle wraparound
      outputRange: side === 0 ? [accentColor, '#ccc', '#ccc', '#ccc', accentColor] :
                   side === 1 ? ['#ccc', accentColor, '#ccc', '#ccc', '#ccc'] :
                   side === 2 ? ['#ccc', '#ccc', accentColor, '#ccc', '#ccc'] :
                                ['#ccc', '#ccc', '#ccc', accentColor, '#ccc'],
    });

    return { backgroundColor };
  };

  const displayPhase = (phase) => {
    // Display both Hold_1 and Hold_2 as "Hold" for the user
    if (phase === 'Hold_1' || phase === 'Hold_2') {
      return 'Hold';
    }
    return phase;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Square Breathing</Text>

      {/* Animated Square */}
      <View style={styles.squareContainer}>
        <Animated.View style={[styles.side, styles.top, getSquareStyles(0)]} />
        <Animated.View style={[styles.side, styles.right, getSquareStyles(1)]} />
        <Animated.View style={[styles.side, styles.bottom, getSquareStyles(2)]} />
        <Animated.View style={[styles.side, styles.left, getSquareStyles(3)]} />
      </View>

      {/* Timer Info */}
      <View style={styles.timerContainer}>
        <Text style={styles.phase}>{displayPhase(currentPhase)}</Text>
        <Text style={styles.time}>{timeLeft}s</Text>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        {!isRunning ? (
          <TouchableOpacity onPress={startTimer} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={pauseTimer} style={styles.button}>
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={resetTimer} style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  squareContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  side: {
    position: 'absolute',
    backgroundColor: '#ccc', // Default (inactive) color
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
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    padding: 15,
    backgroundColor: accentColor,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SquareBreathingTimer;
