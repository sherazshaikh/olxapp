import React from 'react'

const style = {
    banner: {
        width: '100vw',
        height: '170px',
        background: "rgba(110,47,52,.03)",
        marginTop: '100px',
        display: 'flex',
        overFlow:'hidden',
    },
    img: {
        marginLeft: "80px",
        height:"500px"
    },
    text: {
        color: 'black',
        marginTop: '20px',
        paddingLeft: '20px',
    },
    heading: {
        fontWeight: 'bolder',
        fontSize: '30px',
    },
    Link: {
        marginTop: "50px",
        marginLeft: '100px'
    },
    imgLink: {
        width: "110px",
        cursor: 'pointer',
    },
    linkText: {
        marginBottom: '10px'
    }
}


const BottomBanner = () => {

    return (
        <div style={style.banner}>
            <div style={style.img} >
                <img width="370" src="https://statics.olx.com.pk/external/base/img/phone-app.png" alt="" />
            </div>
            <div style={style.text}>
                <h1 style={style.heading}>TRY THE OLX APP</h1>
                <h4>Buy, sell and find just about anything using <br /> the app on your mobile.</h4>
            </div>
            <div style={style.Link}>
                <h5 style={style.linkText}>GET YOUR APP TODAY</h5>
                <img style={style.imgLink} src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="ios-app-store" ></img>
                <img style={style.imgLink} src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="android-app-store" ></img>
            </div>
        </div>
    )

}

export default BottomBanner;