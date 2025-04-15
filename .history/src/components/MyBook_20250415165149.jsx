import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import coverImage from "../assets/images/coverPage.jpg";
import Cover from "./pages/cover/Cover";
import FirstPage from "./pages/page1/first-page";

function MyBook() {
  // props
  return (
    <HTMLFlipBook width={1000} height={1280} showCover="true">
      <Page number={1} title="This is the page number 1">
        <Cover coverImage={coverImage} />
      </Page>
      <Page number={2} title="This is the page number 2">
        <div className="demoPage text-3xl text-white">Page 2</div>
        <FirstPage />
      </Page>
      <Page number={3} title="This is the page number 3">
        <div className="demoPage text-3xl text-white">Page 3</div>
      </Page>
      <Page number={4} title="This is the page number 4">
        <div className="demoPage text-3xl text-white">Page 4</div>
      </Page>
      <Page number={5} title="This is the page number 5">
        <div className="demoPage text-3xl text-white">Page 5</div>
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
