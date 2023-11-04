import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderComponent } from '@/shared/lib/tests/renderComponent';

describe('Sidebar', () => {
    test('Render sidebar', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar test toggle', () => {
        renderComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
