import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MyModal } from "../components/MyModal";
import * as userAction from "../actions/userActionCreator";
import PersonDetails from "../components/PersonDetails";
// import { fetchOneUser } from "../actions/userActionCreator";
const Person = (props) => {
  const param = new URLSearchParams(window.location.search);
  const url = param.get("url");
  // console.log(param.keys, param.get("url"));

  useEffect(() => {
    // props.actions.fetchOneUser(url);

    props.actions.fetchOneUser(url);

    // props.actions
    //   .fetchOneUser(url)
    //   .then((response) => {
    //     document.title = response;
    //   })
    //   .catch(() => {
    //     document.title = "Person Page";
    //   });

    return () => {
      props.actions.removeData();
    };
  }, [url]);

  return (
    <>
      {props.isLoading && <h2>Loading...</h2>}
      {props.isFetching ? (
        // <p>{props.error}</p>
        <MyModal err={props.error} />
      ) : (
        <PersonDetails {...props} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isLoading: state.user.user.isLoading,
    isFetching: state.user.user.isFetching,
    error: state.user.user.error,
    Img: state.user.user.Img,
    Name: state.user.user.Name,
    Location: state.user.user.Location,
    Followers: state.user.user.Followers,
    Following: state.user.user.Following,
    Profile: state.user.user.Profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userAction, dispatch),
    // fu: (url) => dispatch(fetchOneUser(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
