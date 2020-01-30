import React from 'react';
import Layout from '../../../../components/Layout';
import ChartWrapper from './ChartWrapper';
import axios from 'axios';


class Chart extends React.Component {
    render() {
        return (
            <Layout>
                <h1>hi</h1>
                <ChartWrapper />
            </Layout>
        )
    }
}

export default Chart