import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AuthScreenComponent from './Component'

const AuthScreenContainer = props =>
  <AuthScreenContainer
    loading={props.loading}
    error={props.error} />

const mapStateToProps = state => ({
  loading: state.session.loading,
  error: state.session.error,
})

AuthScreenContainer.PropTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default connect(mapStateToProps)(AuthScreenContainer)