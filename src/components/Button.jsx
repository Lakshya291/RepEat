import React from "react";

export default function Button(props) {
	const { text, func } = props;
	return (
		<button
			onClick={func}
			className="px-8 mx-auto py-4 rounded-lg border-[1px] bg-slate-950 blueShadow duration-200 border-blue-400 border-solid border-rounded-20"
		>
			<p>{text}</p>
		</button>
	);
}
