import { describe, it, expect } from 'vitest';
import { evaluateProject, formatStatus } from '../src/app';

describe('ex-002 application core', () => {
  it('should return a healthy evaluation status', () => {
    const res = evaluateProject();
    expect(res.status).toBe('healthy');
    expect(res.integrity).toBe(true);
    expect(typeof res.timestamp).toBe('string');
  });

  it('should format status correctly', () => {
    expect(formatStatus('healthy')).toBe('System Status: HEALTHY');
  });
});
