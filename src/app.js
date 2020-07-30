const fs = require('fs')
const path = require('path')
const { timer } = require('rxjs')
const { map, take } = require('rxjs/operators')
main()

function main() {
    const src = path.join(__dirname, '..')
    const fils = fs.readdirSync(src)
    console.log('文件', fils)

    console.log('开始数羊')
    timer(0, 1000)
        .pipe(
            map((n) => n + 1),
            map((n) => n + '只羊'),
            take(5),
        )
        .subscribe((n) => {
            console.log(n)
        })
}
