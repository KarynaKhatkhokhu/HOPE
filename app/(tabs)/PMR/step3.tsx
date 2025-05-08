import PMRStepScreen from '../../../components/PMRStepScreen';
import { useTranslation } from "react-i18next";

export default function PMRHandsStep() {
  const { t } = useTranslation();

  return (
    <PMRStepScreen
      title={t('effective_rethinking.shoulders_and_neck.title')}
      description={t('effective_rethinking.shoulders_and_neck.description')}
      iconName="PMR_shoulders_and_neck"
      nextRoute="/PMR/step4"
    />
  );
}