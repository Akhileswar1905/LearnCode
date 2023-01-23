const NODE = () => {
  return (
    <div className="node-layout layout">
      <h2>NodeJS Tutorial</h2>

      <div className="iframes">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Oe421EPjeBE?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/f2EqECiTBL8?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default NODE;
