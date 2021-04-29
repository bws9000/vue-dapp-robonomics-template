export const toWei = (price) => {
    return web3.utils.toWei(price, 'ether');
};
export const fromWei = (price) => {
    return web3.utils.fromWei(price, 'ether');
};