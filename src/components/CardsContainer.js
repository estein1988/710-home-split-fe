import React, { Component } from "react";
import HouseCard from './HouseCard'

class CardsContainer extends Component {

    render() {
        const renderHomes = () => this.props.allHomes.map(
            home => <HouseCard
                key={home.id}
                home={home}
            />
        )
        return (
            <div className="cards-container">
                {renderHomes()}
            </div>
        )
    }
}

export default CardsContainer;