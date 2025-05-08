import PMRStepScreen from '../../../components/PMRStepScreen';
import { useTranslation } from "react-i18next";

export default function PMRHandsStep() {
  const { t } = useTranslation();

  return (
    <PMRStepScreen
      title={t('effective_rethinking.thighs.title')}
      description={t('effective_rethinking.thighs.description')}
      iconName="PMR_thighs"
      nextRoute="/PMR/step8"
    />
  );
}