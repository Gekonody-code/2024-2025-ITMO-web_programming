import { readFile as rf1 } from 'node:fs';
import { readFile as rf2 } from 'node:fs/promises';

rf1('package.json', 'utf-8', (error, fileContents) => { console.log(fileContents.substring(0, 10));  });

rf2('package1.json', 'utf-8').then(fc => console.log(fc)).catch(() => console.log('Файла нет, увы'));


console.log('\n');

