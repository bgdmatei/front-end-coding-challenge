import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryLabel } from 'victory';

const Chart = ({ items }) => {
  return (
    <>
      <div className='home'>
        <div className='chart'>
          <VictoryChart
            width={800}
            theme={VictoryTheme.material}
            domainPadding={50}
          >
            <VictoryLabel
              style={[{ fill: 'green', fontSize: 18 }]}
              x={15}
              y={30}
              text={'Actual'}
            />
            <VictoryLabel
              style={[{ fill: 'red', fontSize: 18 }]}
              x={630}
              y={340}
              text={'Forecast '}
            />
            <VictoryLine
              style={{
                data: {
                  stroke: '#3b66d7',
                  strokeWidth: ({ data }) => data.length,
                },
              }}
              labels={items.map(
                (item) =>
                  item.intensity.actual -
                  item.intensity.forecast +
                  ' ' +
                  'gCO2/kWh'
              )}
              labelComponent={<VictoryLabel angle={0} textAnchor='middle' />}
              interpolation='natural'
              data={items}
              y='intensity.actual'
              x='intensity.forecast'
            />
          </VictoryChart>
        </div>
      </div>
    </>
  );
};

export default Chart;
