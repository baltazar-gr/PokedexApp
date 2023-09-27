import React, { useEffect, useState } from 'react';
import { PokemonList } from '../templates';
import { Pokemon, PokemonListItemType } from '../../types';
import { PokemonDetailsModal } from '../molecules';
import { fetchPokemon, storeData } from '../../utils';
import { ActivityIndicator, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokemonsStackParamList } from '../../navigators/types';
import { addPokemon } from '../../redux/pokemonsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

type AddPokemonProps = NativeStackScreenProps<
  PokemonsStackParamList,
  'AddPokemon'
>;

export function AddPokemon({ navigation }: AddPokemonProps) {
  const pokedexData = useAppSelector(state => state.pokemons);
  const [pokemons, setPokemons] = useState<PokemonListItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setSelectedPokemon(undefined);
    setModalVisible(false);
  };

  const handleSeeDetails = async (name: string) => {
    showModal();
    const pokemon = await fetchPokemon(name);
    setSelectedPokemon(pokemon);
  };

  const handleAdd = async (name: string) => {
    const pokemon = await fetchPokemon(name);
    const index = pokedexData.findIndex(item => item.name === name);
    if (index === -1) {
      const newPokedexData = [...pokedexData, pokemon];
      await storeData('pokedex', newPokedexData);
      dispatch(addPokemon(pokemon));
      Alert.alert('Pokemon agregado con exito');
      navigation.goBack();
    } else {
      Alert.alert('Este Pokémon ya existe en la Pokédex');
    }
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <PokemonList
          pokemons={pokemons}
          onSeeDetailsPress={handleSeeDetails}
          onAddPress={handleAdd}
        />
      )}
      <PokemonDetailsModal
        visible={modalVisible}
        pokemon={selectedPokemon}
        onRequestClose={hideModal}
      />
    </>
  );
}
