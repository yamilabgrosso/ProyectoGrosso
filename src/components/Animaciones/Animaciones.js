import React, { Fragment } from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fragment>    
        <Lottie options={defaultOptions} height={height} width={width} />
    </Fragment>
  );
};