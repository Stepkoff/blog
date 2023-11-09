import ReactDOM from 'react-dom/client';
import '@/app/styles/index.scss';
import './shared/config/i18n/i18n';
import {StrictMode} from "react";
import {BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { ForceUpdateProvider } from "@/shared/lib/render/forceUpdate";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import App from "@/app/App";
import { Theme } from "@/shared/const/theme";

const container = document.getElementById('root')!

if (!container) {
    throw new Error(
        'Container Root is not found. App can not be mounted!',
    );
}


ReactDOM.createRoot(container).render(
    <StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ForceUpdateProvider>
                        <ThemeProvider initialTheme={Theme.DARK}>
                            <App />
                        </ThemeProvider>
                    </ForceUpdateProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>,
    </StrictMode>
)
export { Theme } from '@/shared/const/theme';
