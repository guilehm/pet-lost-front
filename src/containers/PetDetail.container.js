import { getSelectedPet } from '../selectors'
import { bindActionCreators } from 'redux'
import * as PetActions from '../actions'
import { connect } from 'react-redux'
import { default as PetDetailComponent } from '../components/pets/PetDetail'


const mapStateToProps = state => ({
    selectedPet: getSelectedPet(state),
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PetActions, dispatch)
})


const PetDetail = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PetDetailComponent)


export default PetDetail
