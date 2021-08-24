//creer la vue recherche de la gestion de vues
import React from 'react'
import {StyleSheet, View, Button, Text, TextInput, FlatList, AcitivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
//classe qui herite de react component
//en react un component rends un component graphique
//on utilise pour ça render
//definir le component sur le parent
//<View style = {{ flex : 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
//<View style = {{ height : 50, width : 50, backgroundColor: 'red'}}></View>
//_loadFilms(){ fonction pour le bouton
//lorsque la recherche est terminee les components sont recharges
class Search extends React.Component {

  constructor(props){
    super(props)

     }
     // texte vide pour tester, pour recuperer une donnee sur un component il faut avoir un evenment sur celui ci
     //this.searchedText = ""
  }
  // Components/Search.js

  //effectuer la recherche si le texte n est pas vide
  _loadFilms() {
    this.setState({isLoading: true })
    if (this.searchedText.length > 0){
      getFilmsFromApiWithSearchedText(this.searchedText).then(data =>
        this.setState({
          films: data.results,
          isLoading: false
        }))
    }
  }

  _displayLoading(){
    if(this.state.isLoading) {
      return(
        <View style={styles.loading_container}>
          <AcitivityIndicator size ='large'/>
        </View>
      )
    }
  }
   //appel setstate et modifier la variable
   _searchTextInputChanged(text){
     //this.setState({searchedText: text})
     this.searchedText = text
   }

  render() {
    console.log(this.state.isLoading);
    return (
      <View style = {styles.main_container}>
      <TextInput
      style={styles.textinput}
      placeholder='Titre du film'
      onChangeText={(text) => this._searchTextInputChanged(text)}
      onSubmitEditing={() => this._loadFilms()}
    />
          <Button style = {{ height : 50}} title = "Rechercher" onPress = {() => this._loadFilms()}/>

          <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
          />
          {this._displayLoading()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor:'#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
