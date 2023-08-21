const graph = {}
graph['you'] = { friends: ['alice', 'bob', 'clair'], isSeller: false, mainNode: true }
graph['bob'] = { friends: ['anuj', 'peggy', 'alice'], isSeller: false, mainNode: false }
graph['alice'] = { friends: ['peggy', 'bob'], isSeller: false, mainNode: false }
graph['clair'] = { friends: ['thom', 'jonny'], isSeller: false, mainNode: false }
graph['anuj'] = { friends: [], isSeller: false, mainNode: false }
graph['peggy'] = { friends: [], isSeller: false, mainNode: false }
graph['thom'] = { friends: [], isSeller: false, mainNode: false }
graph['jonny'] = { friends: [], isSeller: false, mainNode: false }


const getMangoSeller = (graph) => {
    let searchQueue = []
    const [mainNodeName, { friends: friendsMainNode, isSeller: isSellerMainNode }] = Object.entries(graph).find(([name, { mainNode }]) => mainNode)
    const searched = []
    if (isSellerMainNode) {
        return `${mainNodeName} is mango seller`
    }

    searchQueue = [...friendsMainNode]
    while (searchQueue.length > 0) {
        const currentNodeName = searchQueue.shift()
        const currentNode = graph[currentNodeName]
        if (searched.includes(currentNodeName)) {
            continue
        }
        if (currentNode.isSeller) {
            return `${currentNodeName} is mango seller`
        }
        searchQueue = [...searchQueue, ...currentNode.friends]
        searched.push(currentNodeName)
    }

    return 'mango seller not found'
}

console.log(getMangoSeller(graph))