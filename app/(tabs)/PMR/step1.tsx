import PMRStepScreenFirst from '../../../components/PMRStepScreenFirst';
import { useTranslation } from "react-i18next";

export default function PMRHandsStep() {
  const { t } = useTranslation();

  return (
    <PMRStepScreenFirst
      title={t('effective_rethinking.hands_and_forearms.title')}
      description={t('effective_rethinking.hands_and_forearms.description')}
      iconName="PMR_hands_and_forearms"
      nextRoute="/PMR/step2"
    />
  );
}