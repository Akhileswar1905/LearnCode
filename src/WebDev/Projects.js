const Projects = () => {
  return (
    <div className="Projects-layout layout">
      <h2>Projects</h2>

      <div className="iframes">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nu_pCVPKzTk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Projects;
