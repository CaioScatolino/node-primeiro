import { readFile, unlink, writeFile } from "fs/promises"

const exec = async () => {

    // console.log('Creating file...')

    // const list = [1, 2, 3, 4, 5]
    // const listTxt = list.join('\n')

    // await writeFile('./teste.txt', listTxt)  
    // console.log('File created!')

    // const fileContent = await readFile('./teste.txt', 'utf-8')
    // console.log(fileContent)

    // const list = fileContent.split('\n')
    // console.log(list)

    await unlink('./teste.txt')
    console.log('File deleted!')
}

exec()