import React, { useState } from 'react';
import { PokemonDetailsModal } from '../molecules';
import { Pokemon } from '../../types';
import { storeData } from '../../utils';
import { PokedexList } from '../templates';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { removePokemon } from '../../redux/pokemonsSlice';

export function Pokedex() {
  const pokemons = useAppSelector(state => state.pokemons);
  const dispatch = useAppDispatch();

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setSelectedPokemon(undefined);
    setModalVisible(false);
  };

  const handleSeeDetails = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    showModal();
  };

  const handleRemove = async ({ name }: Pokemon) => {
    const newPokemons: Pokemon[] = pokemons.filter(
      pokemon => pokemon.name !== name,
    );
    await storeData('pokedex', newPokemons);
    dispatch(removePokemon(name));
  };

  return (
    <>
      <PokedexList
        pokemons={pokemons}
        onSeeDetailsPress={handleSeeDetails}
        onRemovePress={handleRemove}
      />
      <PokemonDetailsModal
        visible={modalVisible}
        pokemon={selectedPokemon}
        onRequestClose={hideModal}
      />
    </>
  );
}
