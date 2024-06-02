import { LegacyRef, useEffect, useState } from "react";

import {
  CircleFadingPlus,
  Coffee,
  Github,
  Info,
  SendHorizontal,
} from "lucide-react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

type chatHistoryType = {
  role: string;
  parts: any[];
};

const divStyle = {
  user: "flex justify-end",
  model: "flex justify-start",
};

const textStyle = {
  user: "ml-6 w-max max-w-full rounded-xl rounded-tr-none bg-indigo-950 px-2 py-1",
  model:
    "mr-6 w-max max-w-full rounded-xl rounded-tl-none bg-indigo-800 px-2 py-1",
};

export default function Chat() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<chatHistoryType[]>([]);

  async function getResponse() {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({ history: chatHistory, message: value }),
        headers: { "Content-Type": "application/json" },
      };

      setIsLoading(true);
      const response = await fetch(
        "https://chat-aoba-server.vercel.app/aoba",
        options,
      );
      const data = await response.json();

      setChatHistory((previousChat) => [
        ...previousChat,
        {
          role: "model",
          parts: [{ text: data }],
        },
      ]);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSendChat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!value) {
      return;
    }

    setValue("");
    setChatHistory((previousChat) => [
      ...previousChat,
      {
        role: "user",
        parts: [{ text: value }],
      },
    ]);

    getResponse();
  }

  function newChat() {
    setValue("");
    setChatHistory([]);
  }

  // Scroll to bottom of chat every time a new message is sent
  useEffect(() => {
    const chat = document.querySelector(".scrollbar-hide");
    chat?.scrollTo(0, chat.scrollHeight);
  }, [chatHistory]);

  return (
    <div className=" z-10 flex-grow basis-9/12 md:w-[40%]">
      <div className="flex h-full flex-col justify-evenly bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="flex h-14 justify-between px-4 py-3 text-sm">
          <a
            href="https://github.com/reynaldomarchell/chat-aoba"
            target="_blank"
            rel="noreferrer"
            className="tooltip tooltip-bottom relative flex items-center rounded-full bg-slate-800 p-2 shadow-lg outline-none transition-colors duration-300 ease-linear hover:bg-slate-700"
            data-tip="GitHub"
          >
            <Github />
          </a>
          <button
            onClick={newChat}
            className="flex items-center justify-between gap-2 rounded-full bg-slate-800 px-3 py-4 shadow-lg outline-none transition-colors duration-300 ease-linear hover:bg-slate-700"
          >
            <p>New chat</p>
            <CircleFadingPlus color="#f1f5f9" />
          </button>

          <button
            className="relative flex items-center rounded-full bg-slate-800 p-2 shadow-lg outline-none transition-colors duration-300 ease-linear hover:bg-slate-700"
            onClick={() => setInfoOpen(!infoOpen)}
          >
            <Info />
            {infoOpen && (
              <div className="absolute right-0 top-10 z-10 w-48 rounded-lg bg-slate-800 p-2 shadow-lg">
                <p className=" text-xs text-slate-200">
                  With <span className="text-indigo-400">Aoba</span> you can get
                  information quickly, answer questions, and even help with your
                  daily work. <span className="text-indigo-400">Aoba</span> is
                  designed to provide an interactive and responsive experience,
                  so you can feel like you are talking to your own friends. 💖
                </p>
              </div>
            )}
          </button>
        </div>

        <div className="scrollbar-hide no-scrollbar flex h-[335px] flex-col gap-3 overflow-y-auto px-5 py-2 text-slate-200 min-[431px]:h-[220px] md:h-full">
          {chatHistory.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-slate-500">
              <Coffee size={44} color="#64748b" />
              <p>It seems quiet now</p>
            </div>
          ) : (
            <>
              {chatHistory.map((chat, index) => (
                <ChatItem key={index} role={chat.role} parts={chat.parts} />
              ))}
              {isLoading && (
                <div>
                  <span className="loading loading-dots loading-md"></span>
                </div>
              )}
            </>
          )}
        </div>

        <form
          onSubmit={handleSendChat}
          className="flex h-16 items-center justify-between gap-3 px-2 py-5"
        >
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type a message..."
            type="text"
            className="box-border grow rounded-xl bg-slate-800 px-2 py-1 outline-none transition-colors duration-300 ease-linear placeholder:font-light hover:bg-slate-700"
          />
          <button className="rounded-full bg-slate-800 p-2 outline-none transition-colors duration-300 ease-linear hover:bg-slate-700">
            <SendHorizontal color="#f1f5f9" size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

function ChatItem({ role, parts }: chatHistoryType) {
  return (
    <div className={`${role == "user" ? divStyle.user : divStyle.model}`}>
      <span
        className={`overflow-auto ${role == "user" ? textStyle.user : textStyle.model}`}
      >
        {
          <Markdown
            children={parts[0].text}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match ? match[1] : "text"}
                    style={nightOwl}
                    ref={node as unknown as LegacyRef<SyntaxHighlighter>}
                    className="w-max max-w-full"
                    wrapLongLines={true}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        }

        {/* <Markdown
          rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize]}
          remarkPlugins={[remarkGfm]}
          className="max-w-full"
        >
          {parts[0].text}
        </Markdown> */}
      </span>
    </div>
  );
}
