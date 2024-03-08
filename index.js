// 从以太坊区块链中获取指定智能合约事件的日志
async function getContractEventLogs(web3, contract, eventName, filterOptions) {
  return contract.getPastEvents(eventName, filterOptions);
}

// 使用 Promise 封装的发送以太币的函数
function sendEtherPromise(web3, transactionObject) {
  return new Promise((resolve, reject) => {
      web3.eth.sendTransaction(transactionObject)
          .on('transactionHash', (hash) => resolve(hash))
          .on('error', (error) => reject(error));
  });
}

// 获取指定地址的以太坊代币余额
async function getTokenBalance(web3, tokenContract, address) {
  return tokenContract.methods.balanceOf(address).call();
}