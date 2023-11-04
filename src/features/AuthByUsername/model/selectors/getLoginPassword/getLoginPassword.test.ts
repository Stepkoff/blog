import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('Should return test', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                password: 'test',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('test');
    });
    test('Should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
