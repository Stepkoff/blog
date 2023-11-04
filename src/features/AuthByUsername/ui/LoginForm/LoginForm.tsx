import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import s from './LoginForm.module.scss';
import { cn } from '@/shared/lib/cn';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from '@/shared/ui/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface LoginFormProps {
    className?: string
    onSuccess?: () => void
}

const initialReducers:ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={cn(s.loginForm, {}, [className])}>
                <Text title={t('Sign In')} />
                {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    placeholder={t('Enter username')}
                    className={s.input}
                    type="text"
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder={t('Enter password')}
                    className={s.input}
                    type="text"
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    disabled={isLoading}
                    theme={ButtonTheme.OUTLINE}
                    className={s.loginBtn}
                    type="button"
                    onClick={onLoginClick}
                >
                    {t('Sign In')}
                </Button>

            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
