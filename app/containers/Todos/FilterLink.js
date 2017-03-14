
import { connect } from 'react-redux'
import { setVisibilityFilter } from './actions'
import Link from '../../components/Todo/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.get('todos').visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink