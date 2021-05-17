import React, {Component} from 'react';
import './Chart.css';
import {Bar} from 'react-chartjs-2';
import api from '../utils/api';
import {useParams} from 'react-router';
import Spinner from './Spinner';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.id = props.id || props.match.params.id;
    this.state = {labels: [], data: [], colors: [], loaded: false};
  }
  componentDidMount() {
    api('TIME_SERIES_MONTHLY', this.id)
      .then((res) => {
        var labels = [];
        var data = [];
        var colors = ['green'];
        for (var label in res.data['Monthly Time Series']) {
          labels.push(label);
          data.push(res.data['Monthly Time Series'][label]['1. open']);
        }
        labels = labels.reverse();
        data = data.reverse();
        for (let i = 1; i < data.length; i++) {
          colors.push(data[i] > data[i - 1] ? 'green' : 'crimson');
        }
        this.setState({labels, data, colors, loaded: true});
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="chart">
        {this.state.loaded ? (
          <Bar
            data={{
              labels: this.state.labels,
              datasets: [
                {
                  backgroundColor: this.state.colors,
                  //   borderWidth: 2,
                  data: this.state.data,
                  hoverBackgroundColor: 'white',
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'stocks week wise data',
                },
                legend: {
                  display: false,
                }
              },

              scales: {
                x: {
                  grid: {
                    display: false,
                    color: '#777',
                  },
                },
                y: {
                  grid: {
                    color: '#555',
                    width: 3,
                  },
                },
              },
            }}
          />
        ) : (
          <Spinner radius={80} />
        )}
      </div>
    );
  }
}
