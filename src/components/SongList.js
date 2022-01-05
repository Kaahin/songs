import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button 
            primary"
            >
              Play Song
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
} // end of class

const mapStateToProps = (state) => {
  return { songs: state.songs }; // mapStateToProps ser till att songs i redux läses av en class based component med sin state
};

export default connect(mapStateToProps, { selectSong })(SongList);
