import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscRemoteExplorer,
  VscEllipsis, VscAccount, VscSettingsGear, VscJson, VscClose, VscSplitHorizontal,
  VscArrowLeft, VscArrowRight, VscLayout, VscLayoutSidebarLeft, VscLayoutPanel,
  VscLayoutSidebarRight, VscChevronRight, VscSymbolString, VscRemote, VscError,
  VscWarning, VscBroadcast, VscBell
} from "react-icons/vsc";
import { personalInfo } from "../data/personalInfo";
import "./About.css";

type TokenKind = "key" | "string" | "colon" | "brace" | "bracket" | "plain";
type Token = { text: string; kind: TokenKind };

// tab indented so CSS tab-size can shrink the indent on small screens
const source = JSON.stringify(personalInfo, null, "\t");

// minimal JSON highlighter: a string followed by ':' is a key
const tokenize = (src: string): Token[] => {
  const tokens: Token[] = [];
  const re = /("(?:[^"\\]|\\.)*")(:)?|[{}]|[[\]]|[^"{}[\]:]+|:/g;
  for (const match of src.matchAll(re)) {
    const [text, str, colon] = match;
    if (str) {
      tokens.push({ text: str, kind: colon ? "key" : "string" });
      if (colon) tokens.push({ text: colon, kind: "colon" });
    } else if (text === "{" || text === "}") {
      tokens.push({ text, kind: "brace" });
    } else if (text === "[" || text === "]") {
      tokens.push({ text, kind: "bracket" });
    } else {
      tokens.push({ text, kind: text === ":" ? "colon" : "plain" });
    }
  }
  return tokens;
};

const tokens = tokenize(source);

// split the first `count` characters into highlighted lines
const typedLines = (count: number): Token[][] => {
  const lines: Token[][] = [[]];
  let remaining = count;
  for (const token of tokens) {
    if (remaining <= 0) break;
    const text = token.text.slice(0, remaining);
    remaining -= text.length;
    text.split("\n").forEach((part, i) => {
      if (i > 0) lines.push([]);
      if (part) lines[lines.length - 1].push({ text: part, kind: token.kind });
    });
  }
  return lines;
};

const VISIBLE_LINES = source.split("\n").length + 1;

const About = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [typedCount, setTypedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // finish typing a bit before the end so the full file stays on screen
    const progress = Math.min(latest / 0.85, 1);
    setTypedCount(Math.round(progress * source.length));
  });

  const lines = typedLines(typedCount);
  const currentLine = lines.length - 1;
  const typedText = source.slice(0, typedCount);
  const column = typedText.length - typedText.lastIndexOf("\n");
  const currentKey = [...typedText.matchAll(/"([^"]+)":/g)].pop()?.[1];

  return (
    <div ref={targetRef} style={{ height: "360vh", position: "relative" }} id='about'>

      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}>

        <div className="editor" role="img" aria-label={`Code editor typing out a JSON file about me: ${source}`}>
          <div className="editor-titlebar">
            <div className="editor-nav hide-sm"><VscArrowLeft /><VscArrowRight /></div>
            <div className="editor-search"><VscSearch /> Search</div>
            <div className="editor-layout hide-sm">
              <VscLayout /><VscLayoutSidebarLeft /><VscLayoutPanel /><VscLayoutSidebarRight />
            </div>
          </div>

          <div className="editor-body">
            <div className="editor-activitybar hide-sm">
              <div><VscFiles /><VscSearch /><VscSourceControl /><VscDebugAlt /><VscExtensions /><VscRemoteExplorer /><VscEllipsis /></div>
              <div><VscAccount /><VscSettingsGear /></div>
            </div>

            <div className="editor-main">
              <div className="editor-tabs">
                <div className="editor-tab">
                  <VscJson className="json-icon" /> PersonalInfos.json <VscClose />
                </div>
                <div className="editor-tab-actions hide-sm"><VscSplitHorizontal /><VscEllipsis /></div>
              </div>

              <div className="editor-breadcrumbs">
                <span className="hide-sm">Users <VscChevronRight /> milansipos <VscChevronRight /> Downloads <VscChevronRight /></span>
                <VscJson className="json-icon" /> PersonalInfos.json
                {currentKey && <><VscChevronRight /> <VscSymbolString /> {currentKey}</>}
              </div>

              <div className="editor-code" style={{ height: `calc(var(--code-size) * 1.6 * ${VISIBLE_LINES})` }}>
                {lines.map((line, i) => (
                  <div key={i} className={`code-line${i === currentLine ? " current" : ""}`}>
                    {/* vim-style relative line numbers */}
                    <span className="line-number">{i === currentLine ? i + 1 : Math.abs(i - currentLine)}</span>
                    <span className="line-content">
                      {line.map((token, j) => (
                        <span key={j} className={`tok-${token.kind}`}>{token.text}</span>
                      ))}
                      {i === currentLine && <span className="cursor" />}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="editor-statusbar">
            <div>
              <span className="hide-sm"><VscRemote /></span>
              <span><VscError /> 0 <VscWarning /> 0</span>
              <span className="hide-sm">-- INSERT --</span>
            </div>
            <div>
              <span>Ln {currentLine + 1}, Col {column}</span>
              <span className="hide-sm">Tab Size: 4</span>
              <span className="hide-sm">UTF-8</span>
              <span className="hide-sm">LF</span>
              <span>{"{ }"} JSON</span>
              <span className="hide-sm"><VscBroadcast /> Go Live</span>
              <span className="hide-sm"><VscBell /></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
