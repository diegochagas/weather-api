import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

// import { Container } from './styles';

export default function Chart(props) {
  function average(data) {
    return _.round(_.sum(data) / data.length);
  }

  return (
    <td>
      <div>
        <Sparklines height={120} width={180} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>
          {average(props.data)} {props.units}
        </div>
      </div>
    </td>
  );
}
