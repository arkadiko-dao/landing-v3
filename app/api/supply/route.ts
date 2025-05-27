import { NextResponse } from 'next/server';
import { callReadOnlyFunction, cvToJSON } from '@stacks/transactions';

export async function GET(request: Request) {
  const contractAddress = "SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR";
  const usdaSupplyCall = await callReadOnlyFunction({
    contractAddress,
    contractName: "usda-token",
    functionName: "get-total-supply",
    functionArgs: [],
    senderAddress: contractAddress
  });
  const usdaJson = cvToJSON(usdaSupplyCall);
  const calculatedUsda = Number(usdaJson.value.value) / 1000000;
  
  return NextResponse.json({ amount: calculatedUsda });
}
