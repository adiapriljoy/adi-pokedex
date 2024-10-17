import React from "react";
import LoadingBallText from "./components/LoadingBallText";
import LoadingText from "./components/LoadingText";

interface LoadingProps {
  loadingType?: string;
}
const Loading = ({ loadingType = "loadingPage" }: LoadingProps) => {
  const getLoadingDisplay = () => {
    switch (loadingType) {
      case "loadingText":
        return <LoadingText />;
      case "loadingBall":
        return;
      default:
        return <LoadingBallText />;
    }
  };

  return (
    <div className="pb-1 pt-1 dark:bg-gray-900">{getLoadingDisplay()}</div>
  );
};

export default Loading;
