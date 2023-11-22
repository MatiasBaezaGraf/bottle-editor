import { useState } from "react";

import bottle from "./assets/bottle.png";

import "./App.css";
import Icon from "./components/Icon";

function App() {
	const [textOrientation, setTextOrientation] = useState("Horizontal");
	const [bottleText, setBottleText] = useState();

	const [openDropdown, setOpenDropdown] = useState(false);

	const writeBottle = (text) => {
		// Text is max 10 characters
		if (text.length > 10) return;

		// Bottle text is an array of characters
		setBottleText(text);
	};

	return (
		<div className="w-full flex flex-row justify-center p-[10px]">
			<div className="w-full flex flex-row gap-[20px]">
				<div className="relative overflow-hidden w-[50%]">
					<img
						src={bottle}
						className="h-[600px] object-cover m-auto"
						alt="bottle"
					/>

					<div className="absolute  top-[60%] w-full">
						<p
							className={`transform text-[#858585] h-full text-[16px] z-30 ${
								textOrientation == "Vertical" ? "rotate-90" : ""
							}`}
						>
							{bottleText}
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-[10px] items-start w-[50%]">
					<div className="text-left">
						<h1 className="text-[19px]  text-white">Thermo Steel</h1>
						<p className="text-[12px] text-white">
							{" "}
							Vacuum Insulated, Double-Walled Stainless Steel Bottle
						</p>
					</div>
					<div className="relative w-full">
						<button
							onClick={() => setOpenDropdown(!openDropdown)}
							className="w-full p-[6px] text-[13px] text-[#ffffff] flex flex-row justify-between items-center  bg-[#f5f5f5]border-[#4e4e4e] rounded outline-none"
						>
							{textOrientation}
							<Icon name="chevronDown" classname="w-[20px] h-[20px]" />
						</button>

						<div
							className={`absolute top-[105%] left-0 w-full bg-[#6d6d6d] border-[#4e4e4e] rounded z-10 ${
								openDropdown ? "block" : "hidden"
							}`}
						>
							<button
								className="w-full rounded-none text-left text-[13px] p-[6px]"
								onClick={() => {
									setOpenDropdown(false);
									setTextOrientation("Horizontal");
								}}
							>
								Horizontal
							</button>
							<button
								className="w-full rounded-none text-left text-[13px] p-[6px]"
								onClick={() => {
									setOpenDropdown(false);
									setTextOrientation("Vertical");
								}}
							>
								Vertical
							</button>
						</div>
					</div>
					<input
						type="text"
						className="w-full p-[6px] text-[14px] text-[#ffffff] text-left  bg-[#f5f5f5]border-[#4e4e4e] rounded outline-none"
						placeholder="Type something..."
						value={bottleText}
						onChange={(e) => {
							writeBottle(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
