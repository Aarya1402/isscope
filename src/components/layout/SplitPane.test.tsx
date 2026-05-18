import { render, screen, fireEvent } from '@testing-library/react';
import { SplitPane } from './SplitPane';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('SplitPane component', () => {
  it('renders left and right panes', () => {
    render(<SplitPane left={<div>Left Pane</div>} right={<div>Right Pane</div>} />);
    expect(screen.getByText('Left Pane')).toBeInTheDocument();
    expect(screen.getByText('Right Pane')).toBeInTheDocument();
  });

  it('handles mouse events for dragging', () => {
    render(<SplitPane left={<div>Left Pane</div>} right={<div>Right Pane</div>} />);
    // The divider does not have a role or aria-label, so we can find it by looking for the element with col-resize cursor
    const leftPane = screen.getByText('Left Pane').parentElement;
    const divider = leftPane?.nextElementSibling;

    expect(divider).toBeInTheDocument();

    if (divider) {
      fireEvent.mouseDown(divider);
      fireEvent.mouseMove(window, { clientX: 100 });
      fireEvent.mouseUp(window);
    }

    // Test successfully ran if no errors are thrown during fireEvent
  });
});
