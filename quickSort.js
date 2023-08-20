const quickSort = (list = []) => {
    if (list.length < 2) {
        return list
    }

    const currentElem = list[0]
    const lessArray = list.filter((elem) => elem < currentElem)
    const greatestArray = list.filter((elem) => elem > currentElem)
    return [...quickSort(lessArray), currentElem, ...quickSort(greatestArray)]

}

console.log(quickSort([32, 22, 4, 10, 244, 1]))