const Employee = require('../lib/classes');

describe('Employee Constructor', () => 
{
    const NAME = 'Ted';
    const ID = 1;
    const EMAIL = 'ted@work.com';

    const Ted = new Employee(NAME, ID, EMAIL);

    it('should take have three properties: name, id, and email', () => 
    {
        expect(Ted.getName()).toBe(NAME);
        expect(Ted.getId()).toBe(ID);
        expect(Ted.getEmail()).toBe(EMAIL);
    });

    it('should return Employee when getRole() is called', () =>
    {
        expect(Ted.getRole()).toBe('Employee');
    });
});