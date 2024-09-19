//matchers
test('Validate Objects', () => {
    const data = {name: 'nico'};
    data.lastName = 'beltran';
    expect(data).toEqual({name: 'nico', lastName: 'beltran'});
});

test('Nulls', () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
});

test('Boolean', () => {
    const data = true;
    expect(data).toBe(true);
    expect(data).toBeTruthy();
    expect(data).not.toBe();
    expect(false).toBe(false);
    expect(0).toBeFalsy();
});

test('String', () => {
    const data = 'Christoph';
    expect(data).toMatch(/stop/);
});

test('List / Arrays', () => {
    const data = [1,2,3,4,5,6,7];
    expect(data).toContain(5);
});