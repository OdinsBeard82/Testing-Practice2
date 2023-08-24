const { capitalize } = require("./capitalize");

test('Test1', () => {
            expect(capitalize('couRt')).toBe('court');
        });
  
    

module.exports = capitalize;