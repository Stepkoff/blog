import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return (
        <h2>
            {t('Main Page')}
        </h2>

    );
};

export default MainPage;
