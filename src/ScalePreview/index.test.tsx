import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ScalePreview from './index';
import { Tomato } from '@/Scales';

describe('<ScalePreview />', () => {
  it('render ScalePreview with dumi', () => {
    render(<ScalePreview scale={Tomato} />);
    expect(screen.queryByText('light')).toBeInTheDocument();
    expect(screen.queryByText('lightA')).toBeInTheDocument();
    expect(screen.queryByText('dark')).toBeInTheDocument();
    expect(screen.queryByText('darkA')).toBeInTheDocument();
  });
});
