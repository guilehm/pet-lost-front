import { getActivePets } from '../selectors'
import { bindActionCreators } from 'redux'
import * as PetActions from '../actions'
import { connect } from 'react-redux'
import PetCardGroup from '../components/pets/PetCardGroup'


const mapStateToProps = state => ({
    activePets: getActivePets(state),
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PetActions, dispatch)
})

const ActivePetList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetCardGroup)


export default ActivePetList
