import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import coverImage from "../assets/images/coverPage.jpg";
import Cover from "./pages/cover/Cover";
import FirstPage from "./pages/page1/first-page";
import SecondPage from "./pages/page2/second-page";
import ServicePage from "./pages/page3/service";
import AboutPage from "./pages/page4/about-page";

function MyBook() {
  // props
  return (
    <HTMLFlipBook width={1000} height={1280} showCover="true">
      <Page title="This is the page number 1">
        <Cover coverImage={coverImage} />
      </Page>
      <Page title="This is the page number 2">
        <FirstPage number={1} />
      </Page>
      <Page>
        <SecondPage number={2} />
      </Page>
      <Page>
        <ServicePage number={3} />
      </Page>
      <Page number={4}>
        <AboutPage />
      </Page>
      <Page number={5} title="This is the page number 5">
        <div className="demoPage text-3xl text-white">Page 5</div>
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
