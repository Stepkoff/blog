import React, { ErrorInfo } from 'react';
// import { withTranslation } from 'react-i18next';

interface ErrorBoundaryProps {
    children: React.ReactNode
    fallback: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, info:ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        // eslint-disable-next-line no-console
        console.log(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { children, fallback } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            // return <PageError />;
            return fallback;
        }

        return children;
    }
}

export default ErrorBoundary;
