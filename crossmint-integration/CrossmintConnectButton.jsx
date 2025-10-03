import React from 'react';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';

const CrossmintConnectButton = () => {
  return (
    <div>
      <CrossmintPayButton
        clientId="4f49ff00-a70c-429c-acba-9e3c4f3866fatouch crossmint-integration/Home.jsx" // Replace with your Crossmint client ID
        environment="staging" // Use "production" for live environments
        mintConfig={{
          type: "erc-721",
          totalPrice: "0.1", // Price in native currency (e.g., ETH)
          // Add other minting parameters as needed
        }}
        className="crossmint-button"
        // Optional: Customize button text or styling
        buttonText="Connect & Mint with Crossmint"
      />
    </div>
  );
};

export default CrossmintConnectButton;