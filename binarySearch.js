const binarySearch = (neededNumber) => {

    const array = [1, 2, 3, 4, 5, 6, 7, 10]

    let rightIndex = array.length - 1
    let leftIndex = 0

    while (leftIndex <= rightIndex) {
        let partIndex = Math.round((rightIndex + leftIndex) / 2)
        let guess = array[partIndex]
        console.log(partIndex, neededNumber, array[partIndex])
        if (neededNumber === guess) {
            return partIndex
        }

        if (neededNumber > guess) {
            leftIndex = partIndex + 1
        }

        else {
            rightIndex = partIndex - 1
        }
    }
    return null

}

console.log(binarySearch(1), 'result')

