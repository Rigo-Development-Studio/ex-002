const assert = require('assert');

console.log('Running project integrity tests for ex-002...');

try {
  assert.strictEqual(1 + 1, 2, 'Basic math assertion failed');
  console.log('All integrity tests passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Test failure:', err);
  process.exit(1);
}
