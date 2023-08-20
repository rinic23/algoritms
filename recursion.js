const box = {
    key: null,
    box: {
        key: null,
        box: {
            key: null,
            box: {
                box: null,
                key: 'key'
            }
        }
    }
}


const findKeyRecursion = (box, index = 1) => {
    const newIndex = index + 1

    if (box.key) {
        return `you find key in ${newIndex} box`
    }
    if (!box.box) {
        return 'key not find'
    }
    return findKeyRecursion(box.box, newIndex)
}

// console.log(findKeyRecursion(box))

const sumFunc = (numbersArray = [], sum = 0) => {

    if (numbersArray.length === 0) {
        return sum
    }
    const newSum = sum + numbersArray.shift()
    return sumFunc(numbersArray, newSum)

}

console.log(sumFunc([1, 2, 3, 4, 5]))