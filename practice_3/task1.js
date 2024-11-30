const url1 = 'https://kodaktor.ru/sleep/?n=7';
const url2 = 'https://node-server.online/r/fivesec';

async function measureSequential() {
    const startTime = Date.now();
    await fetch(url1);
    await fetch(url2);
    const endTime = Date.now();
    return endTime - startTime;
}

async function measureConcurrent() {
    const startTime = Date.now();

    Promise.allSettled(
        [await fetch(url1),
        await fetch(url2)]
    )
  
    const endTime = Date.now();
    return endTime - startTime;
}

(async function main() {
    const sequentialTime = await measureSequential();
    console.log(`Время последовательных запросов: ${sequentialTime} мс`);
  
    const concurrentTime = await measureConcurrent();
    console.log(`Время конкурентных запросов: ${concurrentTime} мс`);
  })();


