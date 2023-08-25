import capitalize from '../Code/capitalize.js';

test('Who is the son on Odin', () => {
    expect(capitalize('Thor')).toBe('Thor');
  });
  
  test('Who is the adopted son of Odin', () => {
    expect(capitalize('Loki')).toBe('Loki');
  });

module.exports = capitalize;
