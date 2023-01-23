const HTML = () => {
  return (
    <div className="html-layout layout">
      <h2>HTML Tutorials</h2>
      <div className="iframes">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kUMe1FH4CHE?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BsDoLVMnmZs?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/N8YMl4Ezp4g?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default HTML;
