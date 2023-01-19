
const miliToDate = (a) => {
    let timer = a
    let year = Math.floor(timer / (1000 * 60 * 60 * 24 * 365))
    timer = timer %  (1000 * 60 * 60 * 24 * 365)
    // console.log('year', timer)

    let month = Math.floor(timer / (1000 * 60 * 60 * 24 * 30))
    month = month ? month : 0
    // console.log('month', timer)
    timer = timer % (1000 * 60 * 60 * 24 * 30)
    let day = Math.floor(timer / (1000 * 60 * 60 * 24))
    day = day ? day: 0
    timer = timer % (1000 * 60 * 60 * 24)
    let hour = Math.floor(timer/(1000 * 60 * 60))
    hour = hour ? hour : 0
    timer = timer % (1000 * 60 * 60)
    let min = Math.floor(timer / (1000 * 60))
    min = min ? min : 0
    timer = timer % (1000* 60)
    let second =  Math.floor(timer / 1000)
    timer = timer % 1000
    let centisecond = Math.floor(timer/10)
    return [year,month, day,hour, min, second, centisecond]
}

export default miliToDate;