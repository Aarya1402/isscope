import { render, screen } from '@testing-library/react';
import { ScrollArea } from './ScrollArea';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('ScrollArea component', () => {
  it('renders children correctly', () => {
    render(<ScrollArea>Scrollable Content</ScrollArea>);
    expect(screen.getByText('Scrollable Content')).toBeInTheDocument();
  });

  it('applies maxHeight when provided', () => {
    render(
      <ScrollArea maxHeight="200px" data-testid="scroll-area">
        Content
      </ScrollArea>,
    );
    const element = screen.getByTestId('scroll-area');
    expect(element.style.maxHeight).toBe('200px');
  });

  it('passes innerRef correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ScrollArea innerRef={ref}>Content</ScrollArea>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
