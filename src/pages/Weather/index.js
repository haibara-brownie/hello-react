import React from "react";

export default function Weather() {
	const title = "今天天气不错，风和日丽";
	const taskList = ["去打球", "看演唱会", "去备考"];

	const newTaskList = taskList.map((item, index) => {
		return <li key={index}>{item}</li>;
	});

	return (
		<div>
			<h1>{title}</h1>
			<ul>{newTaskList}</ul>
		</div>
	);
}
