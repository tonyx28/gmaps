import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

let promise = {
  "cost_estimates": [
    {
      "ride_type": "lyft_plus",
      "estimated_duration_seconds": 913,
      "estimated_distance_miles": 3.29,
      "estimated_cost_cents_max": 2355,
      "primetime_percentage": "25%",
      "currency": "USD",
      "estimated_cost_cents_min": 1561,
      "display_name": "Lyft Plus",
      "primetime_confirmation_token": null,
      "is_valid_estimate": true
    },
    {
      "ride_type": "lyft_line",
      "estimated_duration_seconds": 913,
      "estimated_distance_miles": 3.29,
      "estimated_cost_cents_max": 475,
      "primetime_percentage": "0%",
      "currency": "USD",
      "estimated_cost_cents_min": 475,
      "display_name": "Lyft Line",
      "primetime_confirmation_token": null,
      "is_valid_estimate": true
    },
    {
      "ride_type": "lyft",
      "estimated_duration_seconds": 913,
      "estimated_distance_miles": 3.29,
      "estimated_cost_cents_max": 1755,
      "primetime_percentage": "25%",
      "currency": "USD",
      "estimated_cost_cents_min": 1052,
      "display_name": "Lyft",
      "primetime_confirmation_token": null,
      "is_valid_estimate": true
    }
  ]
}
class ExtractData extends Componet {

}

class LyftList extends Component {
  render(){
    let list = [];

    this.props.rides.forEach(ride => (
      list.push(<Ride ride={ride} />)
    ))



    return (
      <View style={{alignItems: 'center', marginTop: 20}}>
        {list}
      </View>
    );
  }
}
