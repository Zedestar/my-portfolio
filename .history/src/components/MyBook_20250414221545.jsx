import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

function MyBook() {
  // props
  return (
    <HTMLFlipBook width={600} height={7} showCover="true">
      <Page number={1}>
        <div className="demoPage text-3xl text-white">Page 1</div>
      </Page>
      <Page number={2}>
        <div className="demoPage text-3xl text-white">Page 2</div>
      </Page>
      <Page number={3}>
        <div className="demoPage text-3xl text-white">Page 3</div>
      </Page>
      <Page number={4}>
        <div className="demoPage text-3xl text-white">Page 4</div>
      </Page>
      <Page number={5}>
        <div className="demoPage text-3xl text-white">Page 5</div>
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
