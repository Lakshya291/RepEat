import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExcerciseCard from "./ExcerciseCard";
export default function Workout(prop) {
	const { workout } = prop;
	return (
		<SectionWrapper
			id={"workout"}
			header={"Entering to"}
			title={["The", "Danger", "Zone"]}
		>
			<div className="flex flex-col gap-4">
				{workout.map((excercise, i) => {
					return <ExcerciseCard i={i} excercise={excercise} key={i} />;
				})}
			</div>
		</SectionWrapper>
	);
}
