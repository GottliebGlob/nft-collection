import React from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import isMobile from "../isMobile";

export const InactiveMintButton = () => {
    const CTAButton = styled(Button)`
  display: block !important;
  margin: 0 auto !important;
  background-color: #616A6B !important;
  min-width: 120px !important;
  width: 100%;
  font-size: 1em !important;
  font-family: Pixels !important;
  color: #fff !important;
`;

    const alertMessage = isMobile() ? "Please use desktop!" : "Mint is not live yet!"

    return (
        <div style={{
            marginTop: window.innerWidth > 530 ? '2rem' : 0
        }}>
            <CTAButton variant="contained" onClick={() => alert(alertMessage)}>
                Mint
            </CTAButton>
        </div>

    );
};
