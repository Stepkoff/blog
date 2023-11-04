import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <h2>
            {t('About page')}
        </h2>
    );
};

export default AboutPage;
