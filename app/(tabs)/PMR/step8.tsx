import PMRStepScreen from '../../../components/PMRStepScreen';
import { useTranslation } from "react-i18next";

export default function PMRHandsStep() {
  const { t } = useTranslation();

  return (
    <PMRStepScreen
      title={t('effective_rethinking.calves_and_feet.title')}
      description={t('effective_rethinking.calves_and_feet.description')}
      iconName="PMR_calves_and_feet"
      nextRoute="/PMR/finish"
    />
  );
}