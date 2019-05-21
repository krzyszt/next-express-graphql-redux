class Post extends React.Component {
  static getInitialProps({ query }) {
    return {
      id: query.id
    };
  }

  render() {
    return <h1>Post Page {`ID: ${this.props.id}`}</h1>
  }
}

export default Post;