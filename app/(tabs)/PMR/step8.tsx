import PMRStepScreen from '../../../components/PMRStepScreen';

export default function PMRHandsStep() {
  return (
    <PMRStepScreen
      title="Tense your hands and forearms tightly. Hold for 5 seconds..."
      description="Now breathe out and release all tension. Let your muscles go soft."
      iconName="PMR_arms"
      nextRoute="/PMR/finish"
    />
  );
}