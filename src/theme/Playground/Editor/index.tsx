import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import Translate from "@docusaurus/Translate";
import IconCopy from "@theme/Icon/Copy";
import IconSuccess from "@theme/Icon/Success";
import PlaygroundHeader from "@theme/Playground/Header";
import ResetButton from "@theme/Playground/Buttons/ResetButton";
import { LiveContext, LiveEditor } from "react-live";

import styles from "./styles.module.css";

function CopyButton(): ReactNode {
  const { code, newCode } = useContext(LiveContext);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const copyCode = async () => {
    await navigator.clipboard.writeText(newCode ?? code);
    setCopied(true);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      type="button"
      className={styles.editorButton}
      aria-label={copied ? "Code copied" : "Copy code to clipboard"}
      title={copied ? "Copied" : "Copy"}
      onClick={copyCode}
    >
      {copied ? (
        <IconSuccess className={styles.editorButtonIcon} aria-hidden="true" />
      ) : (
        <IconCopy className={styles.editorButtonIcon} aria-hidden="true" />
      )}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export default function PlaygroundEditor(): ReactNode {
  const isBrowser = useIsBrowser();

  return (
    <>
      <PlaygroundHeader
        buttons={
          <>
            <CopyButton />
            <ResetButton />
          </>
        }
      >
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks"
        >
          Live Editor
        </Translate>
      </PlaygroundHeader>
      <LiveEditor key={String(isBrowser)} className={styles.playgroundEditor} />
    </>
  );
}
