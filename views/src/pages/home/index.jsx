import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../features/auth/AuthSlice";
import { Avatar, Card, Container, UserInfo } from "./styles";

const Index = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Container>
      {user ? (
        <Card>
          <Avatar>
            <div className="image">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
              />
            </div>
          </Avatar>
          <UserInfo>
            <h3 className="name"> {`${user?.firstName} ${user?.lastName}`}</h3>

            <p className="info">{`${user?.email} `}</p>
          </UserInfo>
          <button onClick={() => dispatch(SignOut())}>Sign Out</button>
        </Card>
      ) : <h1>Ooops: not logged in!!!</h1>}
    </Container>
  );
};

export default Index;
