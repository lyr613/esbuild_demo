import * as fs from 'fs'
import * as path from 'path'
import { shuyang } from './other'

main()

function main() {
    const src = path.join(__dirname, '..')
    const fils = fs.readdirSync(src)
    console.log('文件列表:', fils)
    console.log('------')
    console.log('开始数羊')
    shuyang()
}
