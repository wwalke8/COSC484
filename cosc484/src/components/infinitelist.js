import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

export default class InfiniteList extends Component {
  state = {
    items: Array.from({ length: 20 })
  };
  
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  render() {
    return (
        <Fragment>
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={false}
                loader={<h4>Loading...</h4>}
            >
                {this.state.items.map((item, index) => (
                  <Post key='index' imageUrl='http://c.files.bbci.co.uk/CF3C/production/_111925035_penguino.jpg' title='My Post' body='Etiam pellentesque sit amet eros non placerat. Sed at dictum justo, eu accumsan nisl. Pellentesque a nunc at lectus aliquet pharetra.' />
                ))}
            </InfiniteScroll>
        </Fragment>
    );
  }
}
