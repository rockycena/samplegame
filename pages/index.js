import Layout from '../components/layout';
import Particles from 'react-particles-js';
import config from '../particlesjs-config.json';

const IndexPage = (props)=>{
  return (
    <Layout title="Dot Connect | Sign Up">
      <Particles 
        params={config} 
        style={{position: "absolute", zIndex: "1"}}
      /> 
      <div className="container">
        <div className="centered">
          <h1 className="title">Dot Connect</h1>
        </div>
        <div className="centered">
          <h4>Sign Up / Sign In</h4>
        </div>
        <div className="centered" style={{marginTop: "15rem"}}>
          <div className="form-card">
            <form>
              <input type="text" placeholder="Type in your username"/>
              <input type="password" placeholder="Type your password"/>
              <button><i className="fab fa-google"></i><p>Join in with google</p></button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;