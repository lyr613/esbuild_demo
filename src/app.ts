import { of_user } from './util'
import { timer } from 'rxjs'

main()

function main() {
    const u: user = {
        age: 10,
        name: 'mack',
    }
    timer(0, 1000).subscribe((n) => {
        const u2 = of_user(u, { name: 'miu', age: n })
        console.log(n, u2)
    })
}
