import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import { gg } from './styles.css'
// const tt = require('../assets/image/imgplace.svg')
// const gg = require('./tcc.png')// need image / url loaders
class Home extends Component {

  render() {
    return (
     <Grid centered columns={2}>
     <h1 className='gg'>test</h1>
      <Grid.Column>
          <Image src='https://i.imgur.com/xfJDww4.jpg' />
      </Grid.Column>
     </Grid>
    );
  }
}

export default Home;