import React, { Component } from "react";
import HouseCard from './HouseCard'

class CardsContainer extends Component {

    render() {
        const renderHomes = () => this.props.allHomes.map(
            home => <HouseCard
                key={home.id}
                home={home}
                clickAction={this.props.clickAction}
            />
        )

        return (
            <div className="cards-container">
                {renderHomes()}
                <div>
                {/* <HouseCard user={this.props.user} /> */}
                </div>
            </div>
        )
    }
}

export default CardsContainer;