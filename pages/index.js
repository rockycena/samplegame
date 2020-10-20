import Layout from '../components/layout';

const IndexPage = (props)=>{
  return (
    <Layout title="Dot Connect | Sign Up">
      <div className="container">
        <div className="centered">
          <h1 className="title">Dot Connect</h1>
        </div>
        <div className="centered">
          <h4>Sign Up / Sign In</h4>
        </div>
        <div className="form-card">
          <form>
            <input type="text" placeholder="Type in your username"/>
            <button><i class="fab fa-google"></i><p>Join in with google</p></button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;