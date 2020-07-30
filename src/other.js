const { timer } = require('rxjs')
const { map, take } = require('rxjs/operators')

module.exports = {
    shuyang() {
        timer(0, 1000)
            .pipe(
                map((n) => n + 1),
                map((n) => n + '只羊'),
                take(5),
            )
            .subscribe((n) => {
                console.log(n)
            })
    },
}
