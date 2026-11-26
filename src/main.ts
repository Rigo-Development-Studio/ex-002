import { evaluateProject, formatStatus } from './app';

const result = evaluateProject();
console.log(formatStatus(result.status));

const statusEl = document.querySelector('#status');
if (statusEl) {
  statusEl.textContent = `${formatStatus(result.status)} (Checked at ${result.timestamp})`;
}
