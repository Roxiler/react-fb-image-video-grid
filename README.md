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

https://codesandbox.io/s/react-fb-image-video-grid-ix5tzb

# Code example

https://github.com/Roxiler/react-fb-image-video-grid/blob/main/example/index.tsx

## Checkout below gif.

![](https://media.giphy.com/media/o0vQSM2HbuWRa7e0CK/giphy.gif)

# Basic Usage

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
