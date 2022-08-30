const tp = require('../lib/classes');

describe('Engineer Constructor', () => 
{
    const NAME = 'Ted';
    const ID = 1;
    const EMAIL = 'ted@work.com';
    const GITHUB = 'ted-engineer';

    const Ted = new tp.Engineer(NAME, ID, EMAIL, GITHUB);

    it('should take have four properties: name, id, email, and github', () => 
    {
        expect(Ted.getName()).toBe(NAME);
        expect(Ted.getId()).toBe(ID);
        expect(Ted.getEmail()).toBe(EMAIL);
        expect(Ted.getGithub()).toBe(GITHUB);
    });

    it('should return Engineer when getRole() is called', () =>
    {
        expect(Ted.getRole()).toBe('Engineer');
    });
});