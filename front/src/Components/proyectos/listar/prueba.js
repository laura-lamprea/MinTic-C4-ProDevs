import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
  
export default function Profile(props) {

  const { userName } = useParams();
  const match = useRouteMatch();
  
  return (
    <div>
      {match.isExact ? (
        <div>
          <h1> Profile of {userName}</h1>
            
<p> This is the profile page of {userName}</p>
  
          <Link to={`${match.url}/followers`}>
           Followers
          </Link>
        </div>
      ) : (
        <Route path={`${match.url}/followers`}>
          <div>My followers</div>
        </Route>
      )}
    </div>
  );
}