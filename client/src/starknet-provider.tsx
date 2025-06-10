import type { PropsWithChildren } from "react";
import { sepolia } from "@starknet-react/chains";
import { jsonRpcProvider, StarknetConfig, voyager } from "@starknet-react/core";
import cartridgeConnector from "./CartredgeConnector";

export default function StarknetProvider({ children }: PropsWithChildren) {
  const provider = jsonRpcProvider({
    rpc: () => ({ nodeUrl: "https://api.cartridge.gg/x/starknet/sepolia" }),
  });

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={provider}
      connectors={[cartridgeConnector]}
      explorer={voyager}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
