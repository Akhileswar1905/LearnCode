import Left from "./Left";
import Right from "./Right";

const Home = () => {
  return (
    <div className="home">
      <Left
        src={
          "https://imgs.search.brave.com/30a8ZXf49GyxYdDksbkVosryDmBWGTglUAbSbpuiGlk/rs:fit:466:210:1/g:ce/aHR0cHM6Ly93d3cu/cGl4bG9naXguY29t/L3dwLWNvbnRlbnQv/dGhlbWVzL3BpeGxv/Z2l4L2ltYWdlcy9o/dG1sLWNzcy1qcy1s/b2dvLnBuZw "
        }
        desc={
          "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing."
        }
        link={"./WebDev/frontend"}
      />
      <Right
        src={
          "https://imgs.search.brave.com/PG-J09sUI2FZaLkUo-4CRc4MMvTpqjGsKcTbc4G10Vo/rs:fit:700:525:1/g:ce/aHR0cHM6Ly9vcmlz/eXNhY2FkZW15LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMi9hbmd1bGFy/LWJvb3RzdHJhcC1y/ZWFjdC5wbmc"
        }
        desc={`React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
          AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.`}
        link={"./WebDev/FrameWorks"}
      />
      <Left
        src={
          "https://www.programacion.com.py/wp-content/uploads/2016/06/nodejs-express-mongo-300x200.jpg"
        }
        desc={
          "A back-end web developer is responsible for server-side web application logic and integration of the work front-end web developers do. Back-end developers usually write web services and APIs used by front-end developers and mobile application developers."
        }
        link={"./WebDev/backend"}
      />
      <Right
        src={
          "https://imgs.search.brave.com/ZYlgwa9qjrVmZrkn2ENzPIVts7gPclFFxsbaYyJSxoE/rs:fit:1200:1024:1/g:ce/aHR0cDovL3d3dy5w/bmdtYXJ0LmNvbS9m/aWxlcy83L1B5dGhv/bi1UcmFuc3BhcmVu/dC1CYWNrZ3JvdW5k/LnBuZw"
        }
        desc={
          "Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming. Python’s elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms."
        }
        link={"./ml/python"}
      />
      <Left
        src={
          "https://imgs.search.brave.com/3jpevtvX74_UE3WQfBdCJ1idCwxHqgPhLxisx56eIIs/rs:fit:857:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/dG1raktEZndMbi0x/VVNwa3QyNXB3SGFF/RyZwaWQ9QXBp"
        }
        desc={
          "Supervised classification is probably the most commonly used machine learning technique. As the name suggests it is “supervised”: It leverages a labeled training set to build up a logic, and then eventually uses that logic on unlabeled data"
        }
        link={"./ml/supervised"}
      />
      <Right
        src={
          "https://cdn.maubelajarapa.com/wp-content/uploads/2020/04/17204119/ML_ul.jpg"
        }
        desc={
          "In unsupervised learning we are given an unlabeled dataset to analyze. Like in supervised learning we find patterns in this data, but without labels we can’t necessarily interpret these patterns. Instead unsupervised learning leverages assumptions about patterns in data: That things like clusters, correlation, and outliers all represent something important even when we don’t immediately know what that is."
        }
      />
    </div>
  );
};

export default Home;
