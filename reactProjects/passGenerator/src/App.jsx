import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false); 

  const genetarePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*!<>()";
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  useEffect(() => {
    genetarePassword();
  }, [genetarePassword]);

  const copyPassWord = () => {
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <>
      <div className="h-screen flex justify-center">
        <div className="w-xl h-80 bg-gray-500 mt-60 rounded-lg flex items-center flex-col">
          <h1 className="text-3xl mt-10 font-bold">Password Generator</h1>
          <div className="mt-10 relative">
            {" "}
            <span
              className={`absolute -top-8 left-1/2 -translate-x-1/2
      text-sm bg-black text-white px-3 py-1 rounded
      transition-all duration-300
      ${copied ? "opacity-100 scale-100" : "opacity-0 scale-95"}
    `}
            >
              Password copied!
            </span>
            <input
              type="text"
              value={password}
              className="outline-none w-sm py-2 px-2 bg-white rounded-sm"
              placeholder="password"
              readOnly
            />
            <button
              onClick={copyPassWord}
              className="outline-none px-3 py-2 bg-blue-600 text-white rounded-sm ml-2
               transition-all duration-300 hover:bg-blue-800 cursor-pointer"
            >
              copy!
            </button>
          </div>

          <div className="w-full mt-6 px-6">
            <label htmlFor="length" className="block text-left mb-1 text-lg">
              Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="w-full cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="mt-6 flex items-center justify-center w-full ml-10 ">
              <label
                htmlFor="num"
                className="text-lg px-2 text-[18px] font-medium"
              >
                Number:{" "}
              </label>
              <input
                type="checkbox"
                id="num"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setnumberAllowed((prv) => !prv);
                }}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </div>
            <div className="mt-6 flex items-center justify-start w-full ml-10 ">
              <label
                htmlFor="char"
                className="text-lg px-2 text-[18px] font-medium"
              >
                Chracter:{" "}
              </label>
              <input
                type="checkbox"
                id="char"
                defaultChecked={charAllowed}
                onChange={() => {
                  setcharAllowed((prv) => !prv);
                }}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
