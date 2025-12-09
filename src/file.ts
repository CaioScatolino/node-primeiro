import { readFile, writeFile } from "fs/promises";

const exec = async () => {
    console.log('Executando a escrita de arquivo...');

    const list = [1, 2, 3, 4, 5];
    const listTxt = list.join('\n');

    await writeFile('./teste.txt', listTxt);
    console.log('Arquivo escrito com sucesso!');

    const fileContent = await readFile('./teste.txt', 'utf-8');
    console.log('Conteúdo do arquivo lido:');
    console.log(fileContent);

    const listFromFile = fileContent.split('\n');
    console.log('Lista convertida a partir do arquivo:');
    console.log(listFromFile);

}

exec();