import React from 'react'
import Header from '../../components/Base/Header/Header.js'
import Footer from '../../components/Base/Footer/Footer.js'
import './Layout.css'

class Layout extends React.Component {

    render() {
        return (
            <>
                <Header />
                {
                    <main className="main-container">
                        {this.props.children}
                    </main>
                }
                <Footer />
            </>
        )
    }
}

export default Layout