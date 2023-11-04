import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { To, NavigateOptions } from 'react-router-dom';
import { StateSchema, ThunkExtraArg } from './stateSchema';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';

export const createReduxStore = (
    initialState?:StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) => {
    const rootReducer:ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        // loginForm: loginReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg:ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
// export const useAppDispatch = () => useDispatch<AppDispatch>()
