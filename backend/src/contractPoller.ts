import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_API_URL);
const contractAddress = process.env.CONTRACT_ADDRESS;

const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"product","type":"string"}],"name":"OrderPlaced","type":"event"},{"inputs":[{"internalType":"string","name":"product","type":"string"}],"name":"placeOrder","outputs":[],"stateMutability":"payable","type":"function"}]

const contract = new ethers.Contract(contractAddress as string, abi, provider);

export const pollEvents = async () => {
  console.log("Polling for events...");

  // Get past events   
  contract.on("OrderPlaced", (buyer, amount, product) => {
    console.log(`Order placed by ${buyer}, amount: ${ethers.utils.formatEther(amount)} ETH, product: ${product}`);
  });
};
