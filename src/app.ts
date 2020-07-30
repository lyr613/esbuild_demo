import { of_user } from './util'

main()

function main() {
    const u: user = {
        age: 10,
        name: 'mack',
    }
    const u2 = of_user(u, { name: 'miu' })
    console.log(u2)
}
