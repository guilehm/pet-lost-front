import { createSelector } from 'reselect'


const activePets = state => state.activePets
export const getActivePets = createSelector(
    activePets,
    activePets => activePets
)
