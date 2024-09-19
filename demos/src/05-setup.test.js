describe('Set', () => {
    let counter = 0;

    //Setup
    beforeAll(() => {
        console.log('before All: Set');
        counter = 0;
    });

    beforeEach(() => {
        console.log('before Each: Set');
    });

    test('should be true', () => {
        expect(counter).toBe(0);
    });

    describe('Operates', () => {
        beforeAll(() => {
            console.log('before All: Operates');
            console.log('counter: ' + counter);
        });

        it('debería incrementar el contador a 2', () => {
            counter++;
            expect(counter).toBe(2);
        });
        
        it('debería incrementar el contador a 3', () => {
            counter += 2;
            expect(counter).toBe(3);
        });
    });

    // Teardown
    afterEach(() => {
        console.log('Uptede Counter Value');
        counter = 1;
    });

    afterAll(() => {
        console.log('after All: Set');
        counter = 1;
    });
});