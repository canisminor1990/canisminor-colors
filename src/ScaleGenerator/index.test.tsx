import scaleGenerator from './index';

describe('scaleGenerator', () => {
  it('generator scale', () => {
    const scale = scaleGenerator.gen('#1890ff');
    expect(scale.light.length).toEqual(12);
    expect(scale.lightA.length).toEqual(12);
    expect(scale.dark.length).toEqual(12);
    expect(scale.darkA.length).toEqual(12);
    expect(Object.values(scale.palettes()).length).toEqual(12);
    expect(Object.values(scale.palettes(true)).length).toEqual(12);
    expect(Object.values(scale.palettes(true, true)).length).toEqual(12);
    expect(Object.values(scale.palettes(false, true)).length).toEqual(12);
  });
  it('generator scale strict', () => {
    const scale = scaleGenerator.gen('#1890ff', true);
    expect(scale.light.length).toEqual(12);
    expect(scale.lightA.length).toEqual(12);
    expect(scale.dark.length).toEqual(12);
    expect(scale.darkA.length).toEqual(12);
    expect(Object.values(scale.palettes()).length).toEqual(12);
    expect(Object.values(scale.palettes(true)).length).toEqual(12);
    expect(Object.values(scale.palettes(true, true)).length).toEqual(12);
    expect(Object.values(scale.palettes(false, true)).length).toEqual(12);
  });
});

// import '@testing-library/jest-dom';
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Foo from './index';
//
// describe('<Foo />', () => {
//   it('render Foo with dumi', () => {
//     const msg = 'dumi';
//     render(<Foo title={msg} />);
//     expect(screen.queryByText(msg)).toBeInTheDocument();
//   });
// });
