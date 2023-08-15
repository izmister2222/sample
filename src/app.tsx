import { FC } from "react";

type DisplayData = {
  description: string;
};

const App: FC = () => {
  const headText: string = "welcome!";
  const displayData: DisplayData = {
    description:
      "this is react and typescript development environment built by webpack!",
  };

  return (
    <div>
      <h1>{headText}</h1>
      <p>{displayData.description}</p>
    </div>
  );
};

export default App;
