import styles from "./page.module.css";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
    <main className={styles.main}>
      <ErrorBoundary fallback={<p>Whoops...</p>}>
        <Broken />
      </ErrorBoundary>
    </main>
  );
}

function Broken(): JSX.Element {
  throw new Error("Broken");
}
