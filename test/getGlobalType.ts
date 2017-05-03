import test from 'ava'
import { getGlobalType, getSuperClassInfo } from '../dist/utils'

test('getGlobalType, error.', t => {
    t.throws(() => getGlobalType(undefined))
    t.throws(() => getGlobalType(123))
    t.throws(() => getGlobalType(() => { }))
    t.throws(() => getGlobalType(function () { }))
    t.throws(() => getGlobalType(function test() { }))
})

test('getGlobalType, string.', t => {
    t.true(getGlobalType('stringkey') === 'stringkey')
})

test('getGlobalType, one class.', t => {
    class A { }

    const typeA = getGlobalType(A)
    t.true(typeA === 'A')
})

test('getSuperClassInfo.', t => {
    class A { }
    class B extends A { }

    const typeAs = getSuperClassInfo(A)
    const typeBs = getSuperClassInfo(B)
    t.true(typeAs.length === 0)
    t.true(typeBs.length === 1)
    t.true(typeBs[0].type === getGlobalType(A))
    t.true(typeBs[0].class === A)
    t.throws(() => getSuperClassInfo(123 as any))
    t.throws(() => getSuperClassInfo('123' as any))
    t.throws(() => getSuperClassInfo(() => { }))
})