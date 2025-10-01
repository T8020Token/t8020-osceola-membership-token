import React from 'react';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';

const CrossmintConnectButton = () => {
  return (
    <div>
      <CrossmintPayButton
        clientId="0bd60dbe-1756-4b07-9dc3-1e6ddc3161dc" // ✅ Your Crossmint client ID
        environment="production" // ✅ Use "staging" if testing
        mintConfig={{
          type: "erc-1155",
          totalPrice: "5", // ✅ Price in native currency (MATIC on Polygon)
          _quantity: "150000",   // ✅ Quantity of tokens to mint
          seller_fee_basis_points: 500, // ✅ 5% royalties
          fee_recipient: "0x85395CbAC236Ca8565E04dB34b24c41d1d0A262a" // 🔁 Replace with your royalty wallet address
        }}
        className="crossmint-button"
        buttonText="Connect & Mint with Crossmint"
      />
    </div>
  );
};

export default CrossmintConnectButton;