export function debounce(func,delay) {
    let timer

    return function (...args) {

        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            // let that = this
            func.apply(this,args)
        },delay)
    }
}
