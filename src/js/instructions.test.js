import { executions } from './instructions';

test('two plus two is four', () => {
  const args = [0x100, 0x010, 0x001];
  const PC = 0x000;
  const counters = { PC };

  executions.JP_ADDR({ args, counters });

  expect(counters.PC).toBe(0x111);
});
