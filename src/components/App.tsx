import Header from "./Header/Header";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import MapArea from "./MapArea";
import RightSidebar from "./RightSidebar";
import Subheader from "./Subheader/Subheader";

function App() {
  return (
    <div className="h-full w-full">
      <Header />
      <div id="body" className="flex flex-1">
        <div
          id="body-minus-right-sidebar"
          className="flex min-w-[580px] flex-1 flex-col"
        >
          <Subheader />
          <LeftSidebar />
          <MapArea />
        </div>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}

export default App;
