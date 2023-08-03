const selectionSearch = (array = []) => {

    const sortedArray = []
    while (array.length > 0) {
        let smallest = array[0]
        let smallestIndex = 0
        console.log(smallest)
        for (i = 0; i < array.length; i++) {
            if (array[i] < smallest) {
                smallest = array[i]
                smallestIndex = i
            }
        }
        sortedArray.push(...array.splice(smallestIndex, 1))
    }
    return sortedArray
}

console.log(selectionSearch([4, 6, 4, 5, 6, 1]))