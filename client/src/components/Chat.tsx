import { useEffect, useState } from "react";

import { CircleFadingPlus, Coffee, SendHorizontal } from "lucide-react";
import Markdown from "react-markdown";

type chatHistoryType = {
  role: string;
  parts: any[];
};

const divStyle = {
  user: "flex justify-end",
  model: "flex justify-start",
};

const textStyle = {
  user: "ml-4 w-fit rounded-xl rounded-tr-none bg-indigo-950 px-2 py-1",
  model: "mr-4 w-fit rounded-xl rounded-tl-none bg-indigo-800 px-2 py-1",
};

export default function Chat() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<chatHistoryType[]>([]);

  async function getResponse() {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({ history: chatHistory, message: value }),
        headers: { "Content-Type": "application/json" },
      };

      setIsLoading(true);
      const response = await fetch("http://localhost:8000/aoba", options);
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
    <div className="z-10 flex-grow basis-9/12">
      <div className="flex h-full flex-col justify-evenly bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="flex h-14 justify-center py-3 text-sm">
          <button
            onClick={newChat}
            className="flex items-center justify-between gap-2 rounded-full bg-slate-800 px-3 py-4 outline-none transition-colors duration-300 ease-linear hover:bg-slate-700"
          >
            <p>New chat</p>
            <CircleFadingPlus color="#f1f5f9" />
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
    <div className={role == "user" ? divStyle.user : divStyle.model}>
      <span className={role == "user" ? textStyle.user : textStyle.model}>
        <Markdown>{parts[0].text}</Markdown>
      </span>
    </div>
  );
}
