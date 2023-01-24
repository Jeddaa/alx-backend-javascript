export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const test = mathFunction();
    queue.push(test);
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
