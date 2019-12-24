import { getPets } from '../selectors'
import { bindActionCreators } from 'redux'
import * as PetActions from '../actions'
import { connect } from 'react-redux'
import PetCardGroup from '../components/pets/PetCardGroup'



const mapStateToProps = state => ({
    pets: getPets(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PetActions, dispatch)
})

const PetList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetCardGroup)

export default PetList
