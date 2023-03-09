export const convertPopulationFormat = (val) => {
    const reverseArray = Array.from(String(val).split('').reverse()) 
    const arrayWithDots = []

    for (let i = 0; i < reverseArray.length; i++) {
        if (i % 3 !== 0 || i === 0) {
            arrayWithDots.push(reverseArray[i])
        } else {
            arrayWithDots.push(',', reverseArray[i])
        }
    }

    return arrayWithDots.reverse().join('')
}