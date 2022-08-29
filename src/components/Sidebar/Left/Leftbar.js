import { Container } from "react-bootstrap"
import { images } from "../../../constants"
import ProgressBar from "../../ProgressBar/ProgressBar"
import "./leftbar.scss"

const Leftbar = () => {
  return (
    <Container className="leftbar-container">
      <div className="leftbar-top">
        <div className="leftbar-top-header">
          <div>
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div className="avatar">
          <div className="avatar-image">
            <img src={images.dev} alt="" />

            <div className="avatar-light"></div>
          </div>

          <h5>Pariwesh Tamrakar</h5>
          <p>Full-Stack Developer</p>
        </div>
      </div>

      <div className="leftbar-scroll-frame">
        <div className="scroll-content">
          <div className="leftbar-about-info">
            <ul>
              <li>
                <h6>Residence:</h6>
                <span>Australia</span>
              </li>
              <li>
                <h6>City:</h6>
                <span>Sydney</span>
              </li>
              <li>
                <h6>Age:</h6>
                <span>27</span>
              </li>
            </ul>
          </div>

          <div className="leftbar-divider"></div>

          <div className="leftbar-lang-skills">
            <div className="lang-skill-item">
              <div className="leftbar-circle-progress">
                <div className=""></div>
                <h6>English</h6>
              </div>
            </div>
            <div className="lang-skill-item">
              <div className="leftbar-circle-progress">
                <div className=""></div>
                <h6>Nepali</h6>
              </div>
            </div>
          </div>

          <div className="leftbar-divider"></div>

          <div className="leftbar-hard-skills">
            <div className="hard-skill-item">
              <ProgressBar title={"html"} width={"80%"} text={"80%"} />
            </div>
            <div className="hard-skill-item">
              <ProgressBar title={"css"} width={"90%"} text={"90%"} />
            </div>
            <div className="hard-skill-item">
              <ProgressBar title={"javascript"} width={"65%"} text={"60%"} />
            </div>
            <div className="hard-skill-item">
              <ProgressBar title={"react"} width={"75%"} text={"75%"} />
            </div>
            <div className="hard-skill-item">
              <ProgressBar title={"node"} width={"60%"} text={"60%"} />
            </div>
            <div className="hard-skill-item">
              <ProgressBar title={"mongo"} width={"60%"} text={"60%"} />
            </div>
          </div>

          <div className="leftbar-divider"></div>

          <ul className="leftbar-knowledge">
            <li>Bootstrap</li>
            <li>Sass, Styled-Components</li>
            <li>Git-knowledge</li>
          </ul>

          <div className="leftbar-divider"></div>

          <div className="leftbar-link-container">
            <a href="" className="leftbar-link">
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="leftbar-social">
        <a
          href="https://www.linkedin.com/in/pariwesh-tamrakar/"
          target="_blank"
          rel="nofollow noreferrer"
          className="link link-1"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/pariweshtamr"
          target="_blank"
          rel="nofollow noreferrer"
          className="link link-2"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/pariweshtamr7/"
          target="_blank"
          rel="nofollow noreferrer"
          className="link link3"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>
    </Container>
  )
}

export default Leftbar