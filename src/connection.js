import { actions, reducer, signin, signout } from 'react-redux-oauth'
 
class connection extends React.Component {
  componentWillMount () {
    const { dispatch } = this.props
    dispatch(actions.config({
      client_id: '3355c0d4d0cd',
      client_secret: 'bba891b0b7b8af28607115ac83a6eee4',
      url: 'https://www.betaseries.com/authorize', // your oauth server root
    }))
  }
  async handlesignin (e) {
    const { dispatch } = this.props
    e.preventdefault()
    await dispatch(actions.signin({
      username: this.refs.username.value,
      password: this.refs.password.value
    }))
  }
  render () {
    const { oauth } = this.props
    const Signin = signin({
      popup: {},    // popup settings
      success () {}, // invoke when signin success
      failed () {}, // invoke when signin failed
      cancel () {} // invoke when signin cancel
    })(props => <button {...props} />)
    const Signout = singout()(props => <button {...props} />)
    return (
      <div>
        <form onSubmit={this.handleSignin.bind(this)}>
          <input type='text' name='username' ref='username' placeholder='username' />
          <input type='text' name='password' ref='password' placeholder='password' />
          <button type='submit' disabled={oauth.authenticating}>Signin</button>
        </form>
        <hr />
        <Signin provider='github'>Signin</Signin>
        <hr />
        <Signout>Signout</Signout>
      </div>
    )
  }
}
export default connection;