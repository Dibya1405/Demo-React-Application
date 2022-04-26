import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as usersAction from "../actions/usersActionCreators";
// import { fetchUsers } from "../actions/usersActionCreators";
import { bindActionCreators } from "redux";
import { MyModal } from "../components/MyModal";
import AllUsers from "../components/AllUsers";
const url = "https://api.github.com/users";

const People = (props) => {
  useEffect(() => {
    document.title = "People Page";
    // console.log(props);
    props.actions.fetchUsers(url);
    // props.fetchU();
  }, [url]);
  return (
    <>
      <div className="userContainer">
        <h1>List of Users</h1>
        {props.isLoading && <h2>Loading...</h2>}
        {!props.isFetching && !props.isLoading ? (
          // <p>{props.error}</p>
          <MyModal err={props.error} />
        ) : (
          <AllUsers {...props} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
    isFetching: state.users.isFetching,
    users: state.users.users,
    error: state.users.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(usersAction, dispatch),
    // fetchU: () => dispatch(fetchUsers(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
