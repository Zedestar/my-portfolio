import HTMLFlipBook from "react-pageflip";

function MyBook() {
  // props
  return (
    <HTMLFlipBook width={300} height={500}>
      <div className="demoPage text-white">Page 1</div>
      <div className="demoPage text-white">Page 2</div>
      <div className="demoPage text-white">Page 3</div>
      <div className="demoPage text-white">Page 4</div>
    </HTMLFlipBook>
  );
}

export default MyBook;
