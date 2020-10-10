import React from "react";
import {default as InputCity} from './InputCity';
import {connect} from "react-redux";

const Header = ({city}) => {
    return (
        <>
            <div className='header'>
                <h1>{city[0].toUpperCase() + city.slice(1)}</h1>
            <h1>Date: {(new Date().getDate())}/{(new Date().getMonth())}/{(new Date().getFullYear())}</h1>
            </div>
                <div className='city'>
            <InputCity/>
        </div>
            </>
    )
}

const mapStateToProps = (state) => ({
    city: state.info.city
})

export default connect (
    mapStateToProps,
)(Header)