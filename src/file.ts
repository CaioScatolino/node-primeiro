import { writeFile } from "fs/promises"

const exec = async() => {

    console.log('Creating file...')

    const list = [1, 2, 3, 4, 5]
    const listTxt = list.join('\n')

    await writeFile('./teste.txt', listTxt)
    console.log('File created!')

}

exec()