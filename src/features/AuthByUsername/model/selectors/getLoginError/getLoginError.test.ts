import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('Should return error', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('Error');
    });
    test('Should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
