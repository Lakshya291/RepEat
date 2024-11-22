import React from "react";
import Button from "./Button";
export default function Hero() {
	return (
		<div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[790px] w-full mx-auto p-4">
			<div className="flex flex-col gap-4">
				<p className="uppercase">Rep Strong, Eat Right,</p>
				<h1 className=" uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
					Rep<span className="text-blue-400">Eat!</span>{" "}
				</h1>
			</div>
			<p className="text-sm md:text-base font-light">
				By entering, I accept the risk of becoming{" "}
				<span className="text-blue-400 font-medium">outrageously shredded</span>
				, addicted to smashing goals, and an{" "}
				<span className="text-blue-400 font-medium">
					unstoppable fitness machine
				</span>{" "}
				who might scare mirrors with sheer determination. Doors? Optional.
			</p>
			{/* <button className="px-8 py-4 rounded-lg border-[1px] bg-slate-950 blueShadow duration-200 border-blue-400 border-solid border-rounded-20">
				<p>Accept & Begin</p>
			</button> */}
			<Button
				func={() => {
					window.location.href = "#generate";
				}}
				text="Accept & Begin"
			></Button>
		</div>
	);
}
