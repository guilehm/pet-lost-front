import { createSelector } from 'reselect'


const pets = state => state.pets
export const getPets = createSelector(
    pets,
    pets => pets
)
