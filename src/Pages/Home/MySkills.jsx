import data from "../../data/index.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears ,faLink, faDatabase, faCode} from '@fortawesome/free-solid-svg-icons'

export default function MySkills() {

  const handleIcon=(icontype)=>{
      switch(icontype){
          case 'faGears':
            return  <FontAwesomeIcon icon={faGears} className="skills--section--icon"/>
          case 'faLink':
            return  <FontAwesomeIcon icon={faLink} className="skills--section--icon"/>
          case 'faDatabase':
            return  <FontAwesomeIcon icon={faDatabase} className="skills--section--icon"/>
          case 'faCode':
            return  <FontAwesomeIcon icon={faCode} className="skills--section--icon"/>
      }     
  }

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              {/* <img src={item.src} alt="Product Chain" /> */}
              {handleIcon(item.iconType)}
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
