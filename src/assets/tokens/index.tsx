import ADAIcon from "./ada";
import BTCIcon from "./btc";
import DOGEIcon from "./doge";
import ETHIcon from "./eth";
import SOLIcon from "./sol";
import TRXIcon from "./trx";
import USDCIcon from "./usdc";
import USDTIcon from "./usdt";
import WBTCIcon from "./wbtc";
import XRPIcon from "./xrp";


type Props = {
  name?: string;
  size: number;
};

const TokenColorIcon = ({ name, size }: Props) => {
  switch (name) {
    case 'BTC':
      return <BTCIcon size={size} />;
    case 'ETH':
      return <ETHIcon size={size} />;
    case 'XRP':
      return <XRPIcon size={size} />;
    case 'SOL':
      return <SOLIcon size={size} />;
    case 'USDT':
      return <USDTIcon size={size} />;
    case 'USDC':
      return <USDCIcon size={size} />;
    case 'ADA':
      return <ADAIcon size={size} />
    case 'DOGE':
      return <DOGEIcon size={size} />
    case 'TRX':
      return <TRXIcon size={size} />;
    case 'WBTC':
      return <WBTCIcon size={size}/>
    default:
      return <div></div>;
  }
};

export default TokenColorIcon;
