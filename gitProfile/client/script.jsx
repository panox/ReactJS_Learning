var Profile = React.createClass({
  getDefaultProps: function () {
    return {
      clientId: '3e78b0022afdceee9311',
      clientSecret: '5180ff5893ac9764b93b9155b46c329e3543e313',
      urls : {
        user: 'https://api.github.com/users'
      },
      perPage: 5
    };
  },
  getInitialState : function () {

  },
  render: function() {
    return (
      <div>
        <UserInfo />
        <Repos />
      </div>
    );
  }
});

var UserInfo = React.createClass({
  render: function() {
    return (
      <div>
        UserInfo
      </div>
    );
  }
});

var Repos = React.createClass({
  render: function() {
    return (
      <div>
        Repos
      </div>
    );
  }
});

ReactDOM.render(
  <Profile />,
  document.getElementById("github-profiles")
);
