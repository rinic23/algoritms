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

console.log(findKeyRecursion(box))