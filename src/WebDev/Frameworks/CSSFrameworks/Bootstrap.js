const Bootstrap = () => {
  return (
    <div className="Bootstrap-layout layout">
      <h2>Bootstrap Tutorials</h2>
      <div className="iframes">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-qfEOE4vtxE?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vpAJ0s5S2t0?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Bootstrap;
