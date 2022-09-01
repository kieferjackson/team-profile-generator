const tp = require('../lib/classes');

describe('Manager Constructor', () => 
{
    const NAME = 'Ted';
    const ID = 1;
    const EMAIL = 'ted@work.com';
    const OFFICE_NUM = 1;

    const Ted = new tp.Manager(NAME, ID, EMAIL, OFFICE_NUM);

    it('should take have four properties: name, id, email, and office number', () => 
    {
        expect(Ted.getName()).toBe(NAME);
        expect(Ted.getId()).toBe(ID);
        expect(Ted.getEmail()).toBe(EMAIL);
        expect(Ted.getOfficeNum()).toBe(OFFICE_NUM);
    });

    it('should return Intern when getRole() is called', () =>
    {
        expect(Ted.getRole()).toBe('Manager');
    });
});