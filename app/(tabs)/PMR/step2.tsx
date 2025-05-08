import PMRStepScreen from '../../../components/PMRStepScreen';
import { useTranslation } from "react-i18next";

export default function PMRHandsStep() {
  const { t } = useTranslation();

  return (
    <PMRStepScreen
      title={t('effective_rethinking.upper_arms_and_biceps.title')}
      description={t('effective_rethinking.upper_arms_and_biceps.description')}
      iconName="PMR_arms"
      nextRoute="/PMR/step3"
    />
  );
}