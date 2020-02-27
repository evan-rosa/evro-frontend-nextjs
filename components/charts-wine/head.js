import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

const data = {
    columns: [
        {
            label: 'Country',
            field: 'country',
            sort: 'asc'
        },
        {
            label: 'Description',
            field: 'description',
            sort: 'asc'
        },
        {
            label: 'Designation',
            field: 'designation',
            sort: 'asc'
        },
        {
            label: 'Price',
            field: 'price',
            sort: 'asc'
        },
        {
            label: 'Points',
            field: 'points',
            sort: 'asc'
        },
        {
            label: 'Province',
            field: 'province',
            sort: 'asc'
        },
        {
            label: 'Region',
            field: 'region',
            sort: 'asc'
        },
        {
            label: 'Variety',
            field: 'variety',
            sort: 'asc'
        },
        {
            label: 'Winery',
            field: 'winery',
            sort: 'asc'
        },
        {
            label: 'Count',
            field: 'count',
            sort: 'asc'
        }

    ]
};

const tableRender = ({ resultSet }) => (
    <MDBTable responsiveLg>
        <MDBTableHead columns={data.columns} />
        <MDBTableBody rows={resultSet.tablePivot()} />
    </MDBTable>
);

const API_URL = "https://evro-prod-analytics.herokuapp.com"; // change to your actual endpoint

let apiTokenPromise;

const cubejsApi = cubejs(() => {
    if (!apiTokenPromise) {
        apiTokenPromise = fetch(`${API_URL}/auth/cubejs-token`)
            .then(res => res.json()).then(r => r.token)
    }
    return apiTokenPromise;
}, {
    apiUrl: `${API_URL}/cubejs-api/v1`
});
const renderChart = (Component) => ({ resultSet, error }) => (
    (resultSet && <Component resultSet={resultSet} />) ||
    (error && error.toString()) ||
    (<Spin />)
)

const ChartRenderer = () => <QueryRenderer
    query={{
        "measures": [
            "Sample.count"
        ],
        "timeDimensions": [],
        "dimensions": [
            "Sample.country",
            "Sample.description",
            "Sample.designation",
            "Sample.price",
            "Sample.points",
            "Sample.province",
            "Sample.region1",
            "Sample.variety",
            "Sample.winery"
        ],
        "filters": []
    }}
    cubejsApi={cubejsApi}
    render={renderChart(tableRender)}
/>;

export default ChartRenderer;
