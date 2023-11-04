import { cn } from '@/shared/lib/cn/cn';

describe('cn', () => {
    test('one param', () => {
        expect(cn('someClass')).toBe('someClass');
    });

    test('one param + additional class', () => {
        const expected = 'someClass additionalClass';
        expect(cn('someClass', {}, ['additionalClass'])).toBe(expected);
    });

    test('one param + additional class + mode true', () => {
        const expected = 'someClass additionalClass modTrue';
        expect(cn('someClass', { modTrue: true }, ['additionalClass']))
            .toBe(expected);
    });

    test('one param + additional class + mode false', () => {
        const expected = 'someClass additionalClass';
        expect(cn('someClass', { modTrue: false }, ['additionalClass']))
            .toBe(expected);
    });

    test('one param + additional class + mode undefined', () => {
        const expected = 'someClass additionalClass';
        expect(cn('someClass', { modTrue: undefined }, ['additionalClass']))
            .toBe(expected);
    });
});
