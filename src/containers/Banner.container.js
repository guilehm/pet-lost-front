import { getBanners } from '../selectors'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import { connect } from 'react-redux'
import Banner from '../components/layout/Banner'


const mapStateToProps = state => ({
    banners: getBanners(state),
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

const BannerList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Banner)


export default BannerList
