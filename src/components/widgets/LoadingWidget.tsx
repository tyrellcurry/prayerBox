import { Oval } from "react-loading-icons";

function LoadingWidget({ loadingText }: { loadingText: string }) {
  return (
    <div className="flex justify-center">
      <div className="loading_box flex w-fit flex-col items-center">
        <Oval stroke="#06bcee" />
        <p className="pt-2 text-lg">{loadingText}</p>
      </div>
    </div>
  );
}

export default LoadingWidget;
