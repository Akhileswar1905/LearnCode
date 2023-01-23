const Tailwind = () => {
  return (
    <div className="Tailwind-layout layout">
      <h2>Tailwind Tutorials</h2>
      <div className="iframes">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL0Zuz27SZ-6M8znNpim8dRiICRrP5HPft"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Tailwind;
