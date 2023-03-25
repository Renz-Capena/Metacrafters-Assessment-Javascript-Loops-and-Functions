// create a variable to hold your NFT's
const nft = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name,description,creator,blockChainNetwork,date) {
    const obj = {
        name,
        description,
        creator,
        blockChainNetwork,
        date
    }

    nft.push(obj)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(arr) {
    const array = arr
    for(let i = 0 ; i < array.length ; i++){
        console.log(array[i])
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply (arr) {
    return arr.length
}

// call your functions below this line
mintNFT("Celestial Dreams", "A series of surreal dreamscapes inspired by the stars and galaxies above us.", "Maria Johnson", "Ethereum", "January 1st, 2022")
mintNFT("Pixel Pets", "A collection of cute and quirky pixelated animals to brighten up your digital life.", "Jake Davis", "Binance Smart Chain", "February 14th, 2022")
mintNFT("Crypto Gods", "A collection of powerful mythological figures reimagined for the modern age.", "Sophia Lee", "Polygon", "March 7th, 2022")
mintNFT("Abstract Realms", "A series of abstract landscapes that explore the boundaries of shape and color.", "Alex Chen", "Solana", "April 2nd, 2022")
mintNFT("Wilderness Wonders", "A collection of stunning nature scenes captured by a professional photographer on their travels.", "Peter Jackson", "Tezos", "May 1st, 2022")


listNFTs(nft)

console.log(getTotalSupply(nft))
