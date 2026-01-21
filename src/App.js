import Hello from "./components/Hello.js";
import Welcome from "./components/Welcome.js";
import Header from "./components/Header.js";
import TwoElement from "./components/TwoElement.js";
import NameUser from "./components/NameUser.js";
import NameStored from "./components/NameStored.js";
import Sum from "./components/Sum.js"
import Admin from "./components/Admin.js";
import PropName from "./components/PropName.js";
import NameAge from "./components/NameAge.js";
import Title from "./components/Title.js";
import Button from "./components/Button.js";
import Login from "./components/Login.js";
import ObjectProp from "./components/ObjectProp.js";
import Skills from "./components/Skills.js";
import ThreeComp from "./components/ThreeComp.js";
import Task18 from "./components/Task18.js";
import Task19 from "./components/Task19.js";
import Task20 from "./components/Task20.js";
function App(){
  return(
    <div>
    <Hello />
    <Welcome />
    <Header message="I am sharmila" />
    <TwoElement />
    <NameUser />
    <NameStored />
    <Sum />
    <Admin />
    <PropName name="sharmila"/>
    <NameAge name="sharmi" age="20"/>
    <Title title="Title on prop accept and display" />
    <Button label="Submit" />
    <Button label="Click" />
    <Login isLoggedIn={true} />
    <Login isLoggedIn={false} />
    <ObjectProp user={{name:"sharmila",email:"sharmila18@gmail.com"}} />
    <Skills skills={["apple","orange","grapes"]} />
    <ThreeComp title="Title1" description="description1" />
    <ThreeComp title="Title2" description="description2" />
    <ThreeComp title="Title3" description="description3" />
    <Task18 />
    <Task19 />
    <Task20 />
    </div>
  );
}
export default App;