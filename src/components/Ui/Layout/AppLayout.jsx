import {Header, Footer} from '../../index'
import PropTypes from 'prop-types'

export default function AppLayout({ children }){
    return(
        <>
        <Header/>
        <main className='min-h-[85vh]'>{children}</main>
        <Footer/>
        </>
    )
}

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired
}