import { Connector } from "@starknet-react/core";
import { ControllerConnector } from "@cartridge/connector";
import { ControllerOptions } from "@cartridge/controller";
import ColorMode from "@cartridge/controller";
import SessionPolicies from "@cartridge/controller";
import { constants } from "starknet";

const CONTRACT_ADDRESS_GAME =
  "0x681ea222117a7e68124fdb1dbbdee016a560fd453b846fb54bef34be325882d";

const policies: SessionPolicies = {
  contracts: {
    [CONTRACT_ADDRESS_GAME]: {
      methods: [],
    },
  },
};

// Controller basic configuration
const colorMode: ColorMode = "dark";
const theme = "aqua-stark";

const options: ControllerOptions = {
  chains: [
    {
      rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia",
    },
  ],
  defaultChainId: constants.StarknetChainId.SN_SEPOLIA,
  policies,
  theme,
  colorMode,

  namespace: "brawl",
  slot: "brawl5",
};

const cartridgeConnector = new ControllerConnector(
  options
) as never as Connector;

export default cartridgeConnector;
