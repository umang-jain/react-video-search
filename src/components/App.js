import React from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube';

class App extends React.Component {

  state={videos:[], selectedVideo: null}

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    });
  };

  componentDidMount() {
    this.onSearchSubmit('Avengers');
  }

  render(){
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App
