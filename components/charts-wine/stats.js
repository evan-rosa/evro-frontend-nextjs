import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable = () => {
    return (
        <MDBTable hover>
            <MDBTableHead>
                <tr>
                    <th></th>
                    <th>Points</th>
                    <th>Price</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <td>Count</td>
                    <td>129,971</td>
                    <td>120,975</td>
                </tr>
                <tr>
                    <td>Mean</td>
                    <td>88.45</td>
                    <td>35.36</td>
                </tr>
                <tr>
                    <td>Standard Deviation</td>
                    <td>3.04</td>
                    <td>41.02</td>
                </tr>
                <tr>
                    <td>Min</td>
                    <td>80</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>25th Percentile</td>
                    <td>86</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>50th Percentile</td>
                    <td>88</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>75th Percentile</td>
                    <td>91</td>
                    <td>42</td>
                </tr>
                <tr>
                    <td>Max</td>
                    <td>100</td>
                    <td>3300</td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}

export default BasicTable;