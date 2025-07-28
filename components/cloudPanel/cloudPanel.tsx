"use client"; 

import React, { useState, useRef, useEffect } from "react";

export default function CloudPanel() {
  const [output, setOutput] = useState<string[]>([]); 
  const [input, setInput] = useState<string>(""); 
  const outputRef = useRef<HTMLTextAreaElement>(null); 
///
  const addLineToOutput = (line: string) => {
    setOutput((prevOutput) => [...prevOutput, line]);
  };

  const executeCommand = (command: string) => {
    let response = "";
    const lowerCommand = command.toLowerCase().trim();

    if (lowerCommand === "help") {
      response = "Available commands: help, echo <text>, clear, date, whoami";
    } else if (lowerCommand.startsWith("echo ")) {
      response = lowerCommand.substring(5); 
    } else if (lowerCommand === "date") {
      response = new Date().toLocaleString();
    } else if (lowerCommand === "whoami") {
      response = "Guest User";
    } else if (lowerCommand === "clear") {
      setOutput([]);
      return;
    } else {
      response = `Command not found: ${command}`;
    }
    addLineToOutput(response);
  };

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const command = input.trim();
      if (command === "") return;

      addLineToOutput(`> ${command}`);
      executeCommand(command);
      setInput("");
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]); 

  useEffect(() => {
    addLineToOutput("Welcome to SkyDock Cloud Terminal Simulator.");
    addLineToOutput('Type "help" for a list of commands.');
    addLineToOutput("----------------------------------------------------");
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center p-8">
        <h1 className="font-vazir text-black text-3xl text-center mb-8">
          ☁️ سرور ابری
        </h1>
        <hr className="my-6 border-gray-400 border-t-2 w-full max-w-2xl" />
        <div
          className="flex flex-col w-full h-[300px]  max-w-2xl
         bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-lg m-5"
        >
          <textarea
            ref={outputRef}
            className="flex-grow bg-transparent border-none 
            outline-none resize-none text-green-400 leading-6 pb-2"
            value={output.join("\n")}
            readOnly
          />

          <div className="flex items-center">
            <span className="text-green-400 mr-2"></span>
            <input
              type="text"
              className="flex-grow bg-transparent border-none
               outline-none text-green-400 caret-green-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputSubmit}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}
