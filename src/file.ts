import { readFile, writeFile } from "fs/promises";

const exec = async () => {
  console.log("Executando a escrita de arquivo...");

  //   const list = [1, 2, 3, 4, 5];
  //   const listTxt = list.join("\n");

  //   await writeFile("./teste.txt", listTxt);
  //   console.log("Arquivo escrito com sucesso!");

  // Lê o conteúdo do arquivo 'teste.txt' de forma assíncrona
  const fileContent = await readFile("./teste.txt", "utf-8");
  console.log("Conteúdo do arquivo lido:");
  // Exibe o conteúdo lido do arquivo no console
  console.log(fileContent);

  // Divide o conteúdo do arquivo em um array de strings, usando a quebra de linha como delimitador
  const listFromFile = fileContent.split("\n");

  // Adiciona um novo elemento "6" ao final do array
  listFromFile.push("6");

  // Junta os elementos do array de volta em uma única string, usando a quebra de linha como separador
  const listTxt = listFromFile.join("\n");

  // Escreve o novo conteúdo (com o item adicionado) de volta no arquivo 'teste.txt'
  await writeFile("./teste.txt", listTxt);
  console.log("Arquivo escrito com sucesso!");
};

exec();
