export default function create() {
  const memory = new Uint8Array(4096); // 4kb memory
  
  function clearMemory() {
    for (let i = 0; i < memory.length; i++) {
      memory[0x200 + i] = 0;
    }
  }

  return { memory, clearMemory }
}