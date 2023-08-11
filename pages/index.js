import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {

  const handleAboutClick = () => {
    window.scrollTo('#about', 0);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sai Teja Dasari | Portfolio</title>
      </Head>

        
      <div className={styles.navigation_main_div}>
        <div className={styles.navigation_main_div_1}>
        <a class="nav" style={{color: 'white'}} ><b>Sai Teja Dasari</b></a>
        </div>
        <div className={styles.navigation_main_div_2}>
          <a className={styles.navigation_main_div_2_text} href="#about" >About</a>
          <a className={styles.navigation_main_div_2_text} href="#skills">Skills</a>
          <a className={styles.navigation_main_div_2_text} href="#projects">Projects</a>
          <a className={styles.navigation_main_div_2_text} href="#contact">Contact</a>
          <a className={styles.navigation_main_div_2_text} href="/resume" target="blank">
            <b><i class="fa fa-file-pdf-o"></i> Resume</b>
          </a>
        </div>
      </div>


      <div style={{flex: 1,  position: "relative", top: "30px", padding: "10px"}}>
        <div>
          <h1 className={styles.title}>
            Sai Teja Dasari
          </h1>
          <p className={styles.description}>
            AI/ML Engineer | Grad Student
          </p>
        </div>

        

        <div className={styles.content}>
          <div id='about' style={{}}>
            <h1>About</h1>
            <p>Hi! I am Sai Teja Dasari. Experienced AI Engineer with hands-on machine learning skills with the ability to collaborate and build AI 
solutions. Expert in writing codes and building complex neural networks. Strong analytical and problem solving abilities, coupled with a passion for staying up to date with the latest advancements in AI. Committed 
to leveraging my skills to contribute and create meaningful change.
            </p>
          </div>
          <div id='skills' style={{}}>
            <h1>Skills</h1>
            <p>Languages: Python, Java, NodeJS, React, React Native, Java Script</p>
            <p>Databases: MongoDB, Elastic Search, MySQL, Redis</p>
            <p>Libraries: Numpy, Pandas, Tensorflow, Pytorch, Keras, OpenCV, HuggingFace</p>
            <p>Operating Systems: Linux, Windows, Mac</p>
            <p>Other Skills: Machine Learning, Data Structures, Data Visualization, Git, Github</p>
            <p>Tools: Tableau, Visual Studio Code, Pycharm, Eclipse, IntelliJ</p>
          </div>
          <div id='projects' style={{}}>
            <h1>Projects</h1>
            <p>Here are some of the projects I have done on my own time</p>
            <div className={styles.grid}>
              <a className={styles.card}>
                <h3>Translation</h3>
                <p>Machine translation of sentences from English language to Telugu language</p>
              </a>

              <a className={styles.card}>
                <h3>Document Based Question Answering</h3>
                <p>A system that reads the documents and can answer any questions posed from the document</p>
              </a>

              <a className={styles.card}>
                <h3>Speech To Text</h3>
                <p>A Machine learning model capable of converting speech/audio data to text</p>
              </a>

              <a className={styles.card}>
                <h3>Coupon Reminder</h3>
                <p>
                  A system that reads and stores coupons and notifies the users when to redeem.
                </p>
              </a>
            </div>
          </div>
          <div id='contact' style={{}}>
            <h1>Contact</h1>
            <p>LinkedIn</p>
            <p>Github</p>

          </div>
        </div>


      </div>
      <footer>
        <a>
          Copyright c Sai Teja Dasari 2023
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
