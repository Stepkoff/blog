import { LoginSchema } from '@/features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('LoginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123'),
        )).toEqual({ username: '123123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
