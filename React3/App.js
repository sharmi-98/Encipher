import Task1 from "./component/Task1";
import Task10 from "./component/Task10";
import Task2 from "./component/Task2";
import Task3 from "./component/Task3";
import Task4 from "./component/Task4";
import Task5 from "./component/Task5";
import Task6 from "./component/Task6";
import Task7 from "./component/Task7";
import Task8 from "./component/Task8";
import Task9 from "./component/Task9";

function App() {
  return (
    <div>
      <Task1 isLoggedIn={true}/>
      <Task1 isLoggedIn={false}/>
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 />
      <Task8 />
      <Task9 />
      <Task10 />
    </div>
  );
}

export default App;
