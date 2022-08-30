const tp = require('../lib/classes');

describe('Intern Constructor', () => 
{
    const NAME = 'Ted';
    const ID = 1;
    const EMAIL = 'ted@work.com';
    const SCHOOL = 'University of Arizona';

    const Ted = new tp.Intern(NAME, ID, EMAIL, SCHOOL);

    it('should take have four properties: name, id, email, and school', () => 
    {
        expect(Ted.getName()).toBe(NAME);
        expect(Ted.getId()).toBe(ID);
        expect(Ted.getEmail()).toBe(EMAIL);
        expect(Ted.getSchool()).toBe(SCHOOL);
    });

    it('should return Intern when getRole() is called', () =>
    {
        expect(Ted.getRole()).toBe('Intern');
    });
});