import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
    <ErrorBoundary fallback={<p>Whoops...</p>}>
      <Broken />
    </ErrorBoundary>
  );
}

function Broken(): JSX.Element {
  throw new Error("Broken");
}
