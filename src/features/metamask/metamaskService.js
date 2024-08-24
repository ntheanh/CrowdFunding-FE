import Web3 from "web3"
const checkLocalStorage = () => {
  return localStorage.getItem("walletConnected") === "true"
}
const checkConnection = async () => {
  if (typeof window.ethereum !== "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_accounts"
    })
    return accounts.length > 0
  }
  return false
}
const handleConnectWallet = async () => {
  try {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      })
      const walletAddress = accounts[0]

      // Khởi tạo đối tượng web3 với Provider của bạn
      const web3 = new Web3(window.ethereum)

      // Gọi phương thức eth_getBalance
      const weibalance = await web3.eth.getBalance(walletAddress)
      const balance = web3.utils.fromWei(weibalance, "ether")
      // Trả về đối tượng chứa địa chỉ ví và số dư tiền

      return { walletAddress, balance }
    }
  } catch (error) {
    console.error(error)
  }
}

export const metamaskService = {
  handleConnectWallet,
  checkConnection,
  checkLocalStorage
}
