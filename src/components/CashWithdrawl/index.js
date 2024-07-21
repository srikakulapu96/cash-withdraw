// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawl extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-bg">
        <div className="cash-container">
          <div className="name-container">
            <p className="initial">S</p>
            <h3 className="name">Sarah Williams</h3>
          </div>
          <div className="your-balance-container">
            <p className="your-balance-hd">Your Balance</p>
            <div className="show-balance-container">
              <p className="balnce">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-text-container">
            <p className="withdraw-text">Withdraw</p>
            <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="unordered-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                currency={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
