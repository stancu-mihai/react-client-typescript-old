const Home = () => {
  return (
    <div className="container">
      <header className="jumbotron">
      </header>
      <div className="subheading mb-3">Description</div>
      <ul className="fa-ul mb-0">
        <li> This is an app made for self educational purposes only. </li>
        <li>
            <ul>
                <li>Source code available here: <a href="https://github.com/stancu-mihai/serverless-dotnet-api">https://github.com/stancu-mihai/serverless-dotnet-api</a></li>
                <li>Backend is ASP.NET 5 (webapi template) REST API available <a href="https://shrc2yfsge.execute-api.us-east-1.amazonaws.com/dev/swagger/index.html">here</a>, and uses AWS Lambda and DynamoDB (locally available via Docker container)</li> 
                <li>Generates Swagger documentation automatically (see link above)</li> 
                <li>Frontend is React + Typescript + Bootstrap, served from Github Pages, consuming the above mentioned REST API</li> 
                <li>Uses <a href = "https://www.serverless.com/">The serverless framework</a></li> 
                <li>Uses REST architectural style</li> 
                <li>Contains unit tests (xUnit) that can also run offline (db is mocked)</li> 
                <li>Implements JWT authentification (registration + login, stored in session), contains user roles</li> 
                <li>Measures test coverage</li> 
                <li>Usage: Either create own user or login with the ones supplied, then see profile with generated token</li> 
                <li>KNOWN ISSUE: Login is not yet performed automatically after submitting, must refresh page!</li>
                <li>TODO: Login/register exception validation</li>
                <li>Go back to <a href ="/">main page</a></li> 
            </ul>
        </li>
      </ul>
    </div>
  );
};

export default Home;