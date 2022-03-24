import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ForwardParent from './components/ForwardParent';
import PortalComp from './components/PortalComp';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import RenderCounter from './components/RenderCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';


function App() {
  return (
    <div className="App">

      <UserProvider value="Manu">
          <ComponentC/>
      </UserProvider>
      {/* <RenderCounter render = {(count , increamentCount) => 
        <ClickCounterTwo count={count}  increamentCount = {increamentCount}/>}/>
      <RenderCounter render = {(count , increamentCount) => 
        <HoverCounterTwo count={count}  increamentCount = {increamentCount}/>}/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <ErrorBoundary>
      <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Wonder Women"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary> */}
      {/* <PortalComp/> */}
      {/* <ForwardParent/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter/> */}
      {/* <Message/>
      <Greet name="Bruce Wayn" superPower = "He is Rich">
        What to do!! What to do!!
      </Greet>
      <Welcome name="Diana" heroTag="Wonder Women"/>
      <Hello/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
    </div>
  );
}

export default App;
