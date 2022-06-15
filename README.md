Image-video library which displays them in beautiful grids.

# Table of contents

1. [Installation](#installation)
2. [Demo](#demo)
3. [Basic Usage](#basic-usage)

# Installation

- Using NPM
  `npm i react-fb-image-video-grid`

- Using Yarn
  `yarn add react-fb-image-video-grid`

# Demo

https://codesandbox.io/s/react-fb-image-video-grid-forked-p8vo2o

# Code example

https://github.com/Roxiler/react-fb-image-video-grid/blob/main/example/index.tsx

## Checkout below gif.

![](https://media.giphy.com/media/o0vQSM2HbuWRa7e0CK/giphy.gif)

# Basic Usage of Image Grid

- For image grid of 1 image with modal

  ```
  import {ImageGrid} from "react-fb-image-video-grid"

   <ImageGrid>
           <img
             alt="ig"
             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
           />
   </ImageGrid>
  ```

- For image grid of 5 images with modal

  ```
  import {ImageGrid} from "react-fb-image-video-grid"

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
  ```

  - For image grid of 1 image without modal

  ```
  import {ImageGrid} from "react-fb-image-video-grid"

   <ImageGrid showModal={false}>
           <img
             alt="ig"
             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
           />
   </ImageGrid>
  ```

- For image grid of 5 images without modal

  ```
  import {ImageGrid} from "react-fb-image-video-grid"

   <ImageGrid showModal={false}>
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
  ```

# Basic Usage of Video Grid

- For video grid of 1 video with modal

  ```
  import {VideoGrid} from "react-fb-image-video-grid"

   <VideoGrid>
           <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
   </VideoGrid>
  ```

- For image grid of 2 images with modal

  ```
  import {VideoGrid} from "react-fb-image-video-grid"

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
  ```

  - For video grid of 1 video without modal

  ```
  import {VideoGrid} from "react-fb-image-video-grid"

   <VideoGrid showModal={false}>
          <source
                type="video/mp4"
                src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4"
              />
   </VideoGrid>
  ```

- For image grid of 2 images without modal

  ```
  import {VideoGrid} from "react-fb-image-video-grid"

   <VideoGrid showModal={false}>

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
  ```

  ## props

| Accepted props | type    | Description                                                                         |
| -------------- | ------- | ----------------------------------------------------------------------------------- |
| showModal      | boolean | set showModal to true if you want to show the modal when user clicks on image/video |
