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
            <p>Hi! I am Sai Teja Dasari. I love AI and ML, I want to work in different projects</p>
          </div>
          <div id='skills' style={{}}>
            <h1>Skills</h1>
            <p>Hi! I am Sai Teja Dasari. I love AI and ML, I want to work in different projects</p>
          </div>
          <div id='projects' style={{}}>
            <h1>Projects</h1>
            <p>Hi! I am Sai Teja Dasari. I love AI and ML, I want to work in different projects</p>
            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className={styles.card}
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>
          </div>
          <div id='contact' style={{}}>
            <h1>Contact</h1>
            <p>Hi! I am Sai Teja Dasari. I love AI and ML, I want to work in different projects</p>
          </div>
        </div>


      </div>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
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
