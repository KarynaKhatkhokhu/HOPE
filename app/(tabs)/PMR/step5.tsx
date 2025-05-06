import PMRStepScreen from '../../../components/PMRStepScreen';
import { useTranslation } from "react-i18next";

export default function PMRHandsStep() {
  const { t } = useTranslation();

  return (
    <PMRStepScreen
      title={t('effective_rethinking.chest_and_upper_back.title')}
      description={t('effective_rethinking.face.description')}
      iconName="PMR_chest_and_upper_back"
      nextRoute="/PMR/step6"
    />
  );
}