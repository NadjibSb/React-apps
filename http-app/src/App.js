import React, { Component } from "react";
import http from "./services/httpService.js";
import Config from "./config.json";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(Config.apiEndPoint);
    console.log(posts);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const data = { title: "a", body: "b" };
    const { data: post } = await http.post(Config.apiEndPoint, data);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
    console.log("Add", post);
  };

  handleUpdate = async (post) => {
    post.title = post.title + " Updated!";
    const { data: newPost } = await http.put(
      Config.apiEndPoint + "/" + post.id,
      post
    );
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...newPost };
    this.setState({ posts });
    console.log("Update", newPost);
  };

  handleDelete = async (post) => {
    await http.delete(Config.apiEndPoint + "/" + post.id);
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    console.log("Delete");
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
