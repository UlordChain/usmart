
export const Blockchains = {
    UOS:'uos',
    EOS:'eos',
    ETH:'eth',
};

export const BlockchainsArray =
    Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));