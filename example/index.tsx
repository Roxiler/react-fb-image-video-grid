// import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';
import { ImageGrid, VideoGrid } from '../src/Library';

function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <h1>1 image</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <ImageGrid>
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
          </ImageGrid>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>2 images</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <ImageGrid>
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <img
              alt="ig"
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            />
          </ImageGrid>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1>3 images</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <ImageGrid>
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <img
              alt="ig"
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            />
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
            />
          </ImageGrid>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1>4 images</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <ImageGrid>
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <img
              alt="ig"
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            />
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
            />
            <img
              alt="ig"
              src="https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg"
            />
          </ImageGrid>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1>5 images</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <ImageGrid>
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <img
              alt="ig"
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            />
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
            />
            <img
              alt="ig"
              src="https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg"
            />
            <img
              alt="ig"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45jUi84SYeCf4uNAaprS7aoKzS8AohaLwQ&usqp=CAU"
            />
          </ImageGrid>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>6 images</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <ImageGrid>
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <img
              alt="ig"
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            />
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
            />
            <img
              alt="ig"
              src="https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg"
            />
            <img
              alt="ig"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45jUi84SYeCf4uNAaprS7aoKzS8AohaLwQ&usqp=CAU"
            />
            <img
              alt="ig"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45jUi84SYeCf4uNAaprS7aoKzS8AohaLwQ&usqp=CAU"
            />
          </ImageGrid>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>7 images</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <ImageGrid>
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <img
              alt="ig"
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            />
            <img
              alt="ig"
              src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
            />
            <img
              alt="ig"
              src="https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg"
            />
            <img
              alt="ig"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45jUi84SYeCf4uNAaprS7aoKzS8AohaLwQ&usqp=CAU"
            />
          </ImageGrid>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1>1 video</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <VideoGrid>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
          </VideoGrid>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>2 videos</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <VideoGrid>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
          </VideoGrid>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1>3 videos</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <VideoGrid>
            <video controls preload="none">
              <source
                src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                type="video/mp4"
              />
            </video>
            <video controls preload="none">
              <source
                src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                type="video/mp4"
              />
            </video>
            <video controls preload="none">
              <source
                src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                type="video/mp4"
              />
            </video>
          </VideoGrid>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1>4 videos</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <VideoGrid>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
          </VideoGrid>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1>5 videos</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <VideoGrid>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
          </VideoGrid>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>6 videos</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <VideoGrid>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
          </VideoGrid>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>7 videos</h1>
        <div style={{ width: '60vw', height: '30rem' }}>
          <VideoGrid>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
            <video controls>
              <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
            </video>
          </VideoGrid>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
