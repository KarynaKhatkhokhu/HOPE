import PMRStepScreen from '../../../components/PMRStepScreen';
import { useTranslation } from "react-i18next";

export default function PMRHandsStep() {
  const { t } = useTranslation();

  return (
    <PMRStepScreen
      title={t('effective_rethinking.stomach_and_core.title')}
      description={t('effective_rethinking.stomach_and_core.description')}
      iconName="PMR_stomach_and_core"
      nextRoute="/PMR/step7"
    />
  );
}