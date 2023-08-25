import capitalize from '../Code/capitalize';

test('Who is the son on Odin', () => {
    expect(capitalize('thor')).toBe('thOr');
  });
  
  test('Who is the adopted son of Odin', () => {
    expect(capitalize('loki')).toBe('lokI');
  });

module.exports = capitalize;
