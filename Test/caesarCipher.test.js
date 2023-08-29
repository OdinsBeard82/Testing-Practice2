import caesarCipher from '../Code/caesarCipher';

test("number change", () => {
    expect(caesarCipher('odins birds')).toBe('pejot cjset');
});


