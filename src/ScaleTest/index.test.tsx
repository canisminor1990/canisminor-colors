import scaleAATest from './scaleAATest';
import { Colors, BrightColors, Grays, Metals } from '@/Scales';

describe('scaleGenerator', () => {
  it('AA Colors', () => {
    let pass = true;
    Object.values(Colors).forEach((scale) => {
      const result = scaleAATest(scale).all.result;
      if (!result) pass = false;
    });
    expect(pass).toEqual(true);
  });
  it('AA BrightColors', () => {
    let pass = true;
    Object.values(BrightColors).forEach((scale) => {
      const result = scaleAATest(scale).all.result;
      if (!result) pass = false;
    });
    expect(pass).toEqual(true);
  });
  it('AA Grays', () => {
    let pass = true;
    Object.values(Grays).forEach((scale) => {
      const result = scaleAATest(scale).all.result;
      if (!result) pass = false;
    });
    expect(pass).toEqual(true);
  });
  it('AA Metals', () => {
    let pass = true;
    Object.values(Metals).forEach((scale) => {
      const result = scaleAATest(scale).all.result;
      if (!result) pass = false;
    });
    expect(pass).toEqual(true);
  });
});
