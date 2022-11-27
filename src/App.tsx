import React, { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="mt-10 flex flex-col items-center justify-center min-h-full h-screen">
			<div className="flex my-5">
				<a
					className="h-full w-full"
					href="https://vitejs.dev"
					target="_blank"
					rel="noreferrer"
				>
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a
					className="h-full w-full"
					href="https://reactjs.org"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1 className="text-4xl">Vite + React + Tailwind + i18next</h1>
			<div className="">
				<button
					className="my-4 max-w-[50%] rounded-md bg-gray-900 p-3 transition-all border-2 hover: border-fuchsia-900 focus:outline-orange-200 outline-2"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="my-4">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
