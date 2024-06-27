import React from "react";
import Student from "./Student";

export default function StudentList() {
	const studataAry = [
		{
			id: 1001,
			name: "张三",
			sex: "男",
			age: 20,
			address: "河南",
		},
		{
			id: 1002,
			name: "李四",
			sex: "男",
			age: 22,
			address: "河北",
		},
		{
			id: 1003,
			name: "王五",
			sex: "女",
			age: 18,
			address: "广东",
		},
	];

	const newStuDataList = studataAry.map(stu=>{
		return <Student key={stu.id} {...stu} />
	})

	return (
		<table
			border={1}
			align="centter">
			<thead>
				<tr>
					<th>学号</th>
					<th>姓名</th>
					<th>性别</th>
					<th>年龄</th>
					<th>籍贯</th>
				</tr>
			</thead>
			<tbody>
				{/* <Student
					id={1001}
					name={"张三"}
					sex={"男"}
					age={20}
					address={"河南"}
				/>
				<Student
					id={1002}
					name={"李四"}
					sex={"男"}
					age={22}
					address={"河北"}
				/>
				<Student
					id={studata.id}
					name={studata.name}
					sex={studata.sex}
					age={studata.age}
					address={studata.address}
				/> */}

				{
					newStuDataList
				}
				{
					studataAry.map(stu=>{
						return <Student key={stu.id} {...stu} />
					})
				}
			</tbody>
		</table>
	);
}
