import { expect, test } from 'bun:test'

test('acceptance D4: a failing test fails the build', () => {
	expect(1 + 1).toBe(3)
})
