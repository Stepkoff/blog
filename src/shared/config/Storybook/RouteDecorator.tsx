import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (story: () => any) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
