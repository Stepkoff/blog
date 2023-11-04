import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    profileReducer,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ProfilePageProps {
  className?: string
}

const reducers:ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    // const isLoading = useSelector(getProfileLoading);
    // const error = useSelector(getProfileError);
    // const data = useSelector(getProfileData);

    // useEffect(() => {
    //     dispatch(fetchProfileData());
    // }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>{t('Profile')}</div>
            {/* <ProfileCard data={data} isLoading={isLoading} error={error} /> */}
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
