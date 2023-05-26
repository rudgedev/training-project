import { Button, ThemeButton } from '@/shared/components/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';

interface ILangSwitcher {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcher> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={classNames(styles.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>
      {t('Язык')}
    </Button>
  );
};
