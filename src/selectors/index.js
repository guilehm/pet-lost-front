import { createSelector } from 'reselect'


const activePets = state => state.activePets
export const getActivePets = createSelector(
    activePets,
    activePets => activePets
)


const banners = state => state.layout.banners
export const getBanners = createSelector(
    banners,
    banners => banners
)
