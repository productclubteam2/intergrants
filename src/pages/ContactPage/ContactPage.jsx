
import './ContactPage.css';


const ContactPage = ({ user, setUser }) => {

  return (
    <>
      <div className='contact-main-div'>
        
        <div>
          <h4>Meet the Team</h4>
          <div id='manager-div'>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/Yev.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/yev-kapustian/'>
                  Yevhenii Kapustian 
                </a><br />Product Manager
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/sarah.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/sarah-sturgeon/'>
                  Sarah Sturgeon 
                </a><br />Product Manager/Data Scientist
              </label>
            </div>
          </div>
        </div>
        <div>
          <h4>UX Research and Design</h4>
          <div id='design-div'>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/mahita.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/mahita-parasa/'>
                  Mahita Parasa
                </a><br />UX/UI Designer Lead
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/david.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/daveuxui/'>
                  David Bieschke 
                </a><br />UX/UI Designer Lead
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/jinah.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/jinah-choi//'>
                  Jinah Choi
                </a><br />UX/UI Designer 
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/dona.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/donadas/'>
                  Dona Das
                </a> 
                <br /> 
                UX/UI Designer
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/kay.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/kay-hickman22/'>
                  Kay Hickman
                </a><br />UX/UI Designer 
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/may.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/maythin-khaing/'>
                  May Khaing 
                </a><br />UX/UI Designer
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/megan.png')}
                alt='' 
                style={{height: '100px'}}>
                </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/meganflett94/'>
                  Megan Flett 
                </a><br />UX/UI Designer
              </label>
            </div>        
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/luisa.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/luisa-m-rincon/'>
                  Luisa Rincon 
                </a><br />UX/UI Designer
              </label>
            </div>
            <div className="farnoosh" >
              <img 
                class='contact-img'
                src={require('../../utils/images/farnoosh.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/farnoosh-sharbafi/'>
                  Farnoosh Sharbafi 
                </a><br />UX/UI Designer
              </label>
            </div>
          </div>
        </div>        
        <div>
          <h4>Software Engineer</h4>
          <div id='engineer-div'>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/nisha.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/nisha-yadav09/'>
                  Nisha 
                </a> <br />Software Engineer Lead
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/roman.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/roman-protoliuk-a5340a170/'>
                  Roman Protulik 
                </a><br />Software Engineer
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/michael.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/mcortezdev/'>
                  Michael Cortez 
                </a><br /> Software Engineer
              </label>
            </div>
            <div> 
              <img 
                class='contact-img'
                src={require('../../utils/images/yi.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/msyili/'>
                  Yi Li 
                </a><br /> Software Engineer
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/trevor.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/trevor-faivre/'>
                  Trevor Faivre 
                </a><br /> Software Engineer Lead
              </label>
            </div>
            <div> 
              <img 
                class='contact-img'
                src={require('../../utils/images/james.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/james-d-sullivan/'>
                  James Sullivan
                </a><br /> Software Engineer
              </label>
            </div>
            <div> 
              <img 
                class='contact-img'
                src={require('../../utils/images/kris.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/kris-mally/'>
                  Kris Mally
                </a><br /> Software Engineer
              </label>
            </div>
            <div> 
              <img 
                class='contact-img'
                src={require('../../utils/images/maika.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/maika-langi'>
                  Maika Langi
                </a><br /> Software Engineer
              </label>
            </div>
          </div>
        </div>
        <div>
          <h4>Data Science</h4>
          <div id='data-div'>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/joshua.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/linjoshua/'>
                  Joshua Lin 
                </a><br /> Data Scientist Lead
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/pic3.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/irukanwanochie/'> 
                  Iruka Nwanochie 
                </a><br />Data Analyst
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/pic4.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/paulzeecheng/'>
                  Paul Zee-Cheng 
                </a><br />Data Analyst
              </label>
            </div>
            <div>
              <img 
                class='contact-img'
                src={require('../../utils/images/morgan.png')}
                alt='' 
                style={{height: '100px'}}>
              </img>
              <label id='contact-label'>
                <a href ='https://www.linkedin.com/in/morganhofmann/'>
                  Morgan Hofmann 
                </a><br />Data Analyst
              </label>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactPage
