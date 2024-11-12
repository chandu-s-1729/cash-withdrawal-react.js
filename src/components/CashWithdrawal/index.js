// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onWithdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="profile-container">
            <div className="logo-card">
              <p>s</p>
            </div>
            <p className="profile-title"> Sarah Williams </p>
          </div>

          <div className="balance-container">
            <p className="balance-title"> Your Balance </p>
            <div className="balance-card">
              <p className="balance-amount">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>

          <div className="withdraw-container">
            <p className="withdraw-title"> Withdraw </p>
            <p className="choose-sum"> CHOOSE SUM (IN RUPEES) </p>
            <ul className="denomination-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  onWithdrawAmount={this.onWithdraw}
                  eachDenominationDetails={eachDenomination}
                  key={eachDenomination.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
