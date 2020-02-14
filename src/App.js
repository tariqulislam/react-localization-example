import React from 'react';
import './App.css';
import { withTranslation } from 'react-i18next'

class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "en"
    }
  }

  onLanguageHandle = (event) => {
    let newLang = event.target.value;
    this.setState({value: newLang})
    this.props.i18n.changeLanguage(newLang)
  }
 
  render () {
    const {t} = this.props
    console.log('this is', this)
    return (
      <div className="App">
        <div><input
        checked={this.state.value === 'en'}
        name="language" onChange={(e) => this.onLanguageHandle(e)} value="en" type="radio" />English &nbsp; 
        <input name="language" value="jp" 
        checked={this.state.value === 'jp'}
        type="radio" onChange={(e) => this.onLanguageHandle(e)} /></div>
        <p> {t('introduction')}</p>
      </div>
    );
  }
  
}

export default withTranslation()(App);
