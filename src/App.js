import Dept from "./pages/Dept";
import Emp from "./pages/Emp";
import StudentList from "./pages/StudentList";
import Weather from "./pages/Weather";

function App() {
	// return <div className="App">this is a App</div>;
	return (
		<div>
			<Dept/>
			<Weather />
			<Emp/>
			<StudentList />
		</div>
	);
}

export default App;
