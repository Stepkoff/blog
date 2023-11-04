import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/stateSchema';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// enum AuthErrors {
//     INCORRECT_DATA = '',
//     SERVER_ERROR = '',
// }

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/fetchUserById',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error('Server response Error.');
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            // thunkAPI.extra.navigate('/about');
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue('Auth Error');
        }
    },
);
