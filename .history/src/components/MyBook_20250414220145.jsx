import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

function MyBook() {
  // props
  return (
    <HTMLFlipBook width={600} height={7} showCover="true">
      <Page>
        <div className="demoPage text-3xl text-white">Page 1</div>
      </Page>
      <div className="demoPage text-3xl text-white">Page 2</div>
      <div className="demoPage text-3xl text-white">Page 3</div>
      <div className="demoPage text-3xl text-white">Page 4</div>
    </HTMLFlipBook>
  );
}

export default MyBook;
