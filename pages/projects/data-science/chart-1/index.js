import React from 'react';
import Layout from '../../../../components/Layout';
import axios from 'axios';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: [],
            title: [],
            search_description: [],
            canonical: [],
            h_one: [],
            h_one_span: [],
            content: []
        };
        this.getData = this.getData.bind(this);
    }
    getData() {
        const url = `https://evro-prod-backend.herokuapp.com/api/evro/data/wine/`;
        axios
            .get(url)
            .then((res) => {
                this.setState({
                    test: res.data
                });
                console.log(res.data);
            })
            .catch((error) => this.setState({ error }));


    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Layout>
                <h1>hi</h1>
                <BarChart
                    width={500}
                    height={300}
                    data={this.props.data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region_1" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="region_1" fill="#8884d8" />
                </BarChart>
            </Layout>
        )
    }
}

export default Chart