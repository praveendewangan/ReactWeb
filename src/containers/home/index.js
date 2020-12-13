import Recat , { Component } from 'react';
import classes from './styles/home.module.css';
class Home extends Component {
    render () {
        return (
            <div className={classes.container}>
                <section className={classes.wrapperbox}>
                    <div>
                        <h3>Hey,</h3>
                        <p>I'm Praven</p>
                    </div>
                    <div>
                        Section 2
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;