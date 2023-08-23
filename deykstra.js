const graph = {

    book: {
        plate: 5,
        poster: 0,
    },
    plate: {
        basGuitar: 15,
        drums: 20,
    },
    poster: {
        basGuitar: 30,
        drums: 35
    },
    basGuitar: {
        piano: 20
    },
    drums: {
        piano: 10
    },
    piano: {}
}

const processed = []

const costs = {
    plate: 5,
    poster: 0,
    basGuitar: Infinity,
    drums: Infinity,
    piano: Infinity
}

const parents = {}


const findLowestCostNode = (costs) => {
    let lowestCost = Infinity
    let lowestCostNode = null
    Object.entries(costs).forEach(([nodeName, cost]) => {
        if (cost < lowestCost && !processed.includes(nodeName)) {
            lowestCost = cost
            lowestCostNode = nodeName
        }
    })

    // console.log(lowestCost, lowestCostNode)
    return lowestCostNode
}

const findLowestCostsToFinal = () => {
    let node = findLowestCostNode(costs)
    while (node) {
        const cost = costs[node]
        const nearNodes = graph[node]

        Object.keys(nearNodes).forEach((n) => {
            const newCost = cost + nearNodes[n]
            if (newCost < costs[n]) {
                costs[n] = newCost
            }
        })
        processed.push(node)
        node = findLowestCostNode(costs)
    }

}
findLowestCostsToFinal()

console.log(costs)