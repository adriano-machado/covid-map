import React, { useEffect, useState } from 'react';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import Europe from 'fusionmaps/maps/fusioncharts.europe';
import NorthAmerica from 'fusionmaps/maps/fusioncharts.northamerica';
import SouthAmerica from 'fusionmaps/maps/fusioncharts.southamerica';
import Asia from 'fusionmaps/maps/fusioncharts.asia';
import Australia from 'fusionmaps/maps/fusioncharts.australia';
import Africa from 'fusionmaps/maps/fusioncharts.africa';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import api from './services/api';
import worldJson from './const';
// import { format } from './util/format';

ReactFC.fcRoot(
  FusionCharts,
  Maps,
  World,
  Europe,
  NorthAmerica,
  SouthAmerica,
  Asia,
  Australia,
  Africa,
  FusionTheme
);
export default function App() {
  const colorConfig = {
    hoverColor: '#FFF9C4',
    mainColor: '#FFE0B2',
    minColor: '#FFD74D',
    maxColor: '#E65100',
  };
  const globalChartOptions = {
    captionalignment: 'left',
    subcaption: 'Confirmed cases 2020',
    theme: 'fusion',
    formatnumberscale: '1',
    showlabels: '0',
    thousandSeparator: '.',
    // numberScaleUnit: 'K, M',
    // numberScaleValue: '1000, 1000',
    // numbersuffix: ' confirmed cases',
    entityfillhovercolor: colorConfig.hoverColor,

    entitytooltext:
      "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value confirmed cases</div>",
  };

  const colorRangeConfig = {
    startlabel: 'Low',
    endlabel: 'High',
    code: colorConfig.mainColor,
    gradient: '1',
  };
  const [objData, setObjData] = useState({});
  const chartConfigs = {
    type: 'world',
    width: '100%',
    height: window.innerWidth > 600 ? 700 : 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Worldwide Covid-19',

        ...globalChartOptions,
      },
      colorrange: {
        minvalue: '5000',
        ...colorRangeConfig,
        color: [
          {
            maxvalue: '500000',
            displayvalue: 'Average',
            code: colorConfig.minColor,
          },
          {
            maxvalue: '1500000',
            code: colorConfig.maxColor,
          },
        ],
      },
      data: objData.continentsData,
      linkeddata: [
        {
          id: 'NA',
          linkedchart: {
            chart: {
              caption: 'North America Worldwide Covid-19',
              ...globalChartOptions,
            },
            colorrange: {
              minvalue: '1000',
              ...colorRangeConfig,
              color: [
                {
                  maxvalue: 800000,
                  displayvalue: 'Average',
                  code: colorConfig.minColor,
                },
                {
                  maxvalue: 1500000,
                  code: colorConfig.maxColor,
                },
              ],
            },
            data: objData['North America'],
          },
        },
        {
          id: 'SA',
          linkedchart: {
            chart: {
              caption: 'South America Covid-19',
              ...globalChartOptions,
            },
            colorrange: {
              minvalue: '100',
              ...colorRangeConfig,
              color: [
                {
                  maxvalue: 50000,
                  displayvalue: 'Average',
                  code: colorConfig.minColor,
                },
                {
                  maxvalue: 100000,
                  code: colorConfig.maxColor,
                },
              ],
            },
            data: objData['South America'],
          },
        },
        {
          id: 'AS',
          linkedchart: {
            chart: {
              caption: 'Asia Covid-19',

              ...globalChartOptions,
            },
            colorrange: {
              minvalue: '1000',
              ...colorRangeConfig,
              color: [
                {
                  maxvalue: '50000',
                  displayvalue: 'Average',
                  code: colorConfig.minColor,
                },
                {
                  maxvalue: '110000',
                  code: colorConfig.maxColor,
                },
              ],
            },
            data: objData.Asia,
          },
        },
        {
          id: 'EU',
          linkedchart: {
            chart: {
              caption: 'Europe Covid-19',

              ...globalChartOptions,
            },
            colorrange: {
              minvalue: '500',
              ...colorRangeConfig,
              color: [
                {
                  maxvalue: '100000',
                  displayvalue: 'Average',
                  code: colorConfig.minColor,
                },
                {
                  maxvalue: '300000',
                  code: colorConfig.maxColor,
                },
              ],
            },
            data: objData.Europe,
          },
        },
        {
          id: 'AU',
          linkedchart: {
            chart: {
              caption: 'Australia Covid-19',

              ...globalChartOptions,
            },
            colorrange: {
              minvalue: '100',
              ...colorRangeConfig,
              color: [
                {
                  maxvalue: '40000',
                  displayvalue: 'Average',
                  code: colorConfig.minColor,
                },
                {
                  maxvalue: '80000',
                  code: colorConfig.maxColor,
                },
              ],
            },
            data: [
              {
                id: 'SW',
                value: 0,
                tooltext: 'No Data available',
              },
              {
                id: 'NT',
                value: 0,
                tooltext: 'No Data available',
              },
              {
                id: 'QU',
                value: 0,
                tooltext: 'No Data available',
              },
              {
                id: 'SA',
                value: 0,
                tooltext: 'No Data available',
              },
              {
                id: 'TA',
                value: 0,
                tooltext: 'No Data available',
              },
              {
                id: 'VI',
                value: 0,
                tooltext: 'No Data available',
              },
              {
                id: 'WA',
                value: 0,
                tooltext: 'No Data available',
              },
            ],
          },
        },
        {
          id: 'AF',
          linkedchart: {
            chart: {
              caption: 'Africa Covid-19',
              ...globalChartOptions,
            },
            colorrange: {
              minvalue: '30',
              ...colorRangeConfig,
              color: [
                {
                  maxvalue: '5000',
                  displayvalue: 'Average',
                  code: colorConfig.minColor,
                },
                {
                  maxvalue: '10000',
                  code: colorConfig.maxColor,
                },
              ],
            },
            data: objData.Africa,
          },
        },
      ],
    },
    events: {
      linkedItemOpened(e, d) {
        const chart = FusionCharts(Object.keys(e.sender.link.items)[0]);
        // chart.setChartAttribute({
        //   caption:"BLABLBALBAL",
        // })
        // console.log(chart.getChartAttribute())
        chart.resizeTo('100%', window.innerWidth > 600 ? 800 : 450);
      },
      beforedataupdate(e, d) {
        // console.log(e.sender.id,'antes')
        if (e.sender.args.clickedEntity) {
          FusionCharts('chartobject-1').configureLink({
            overlayButton: {
              message: 'Back',
              bgColor: '#FFE0B2',
              padding: 10,
              fontColor: colorConfig.maxColor,
              fontFamily: 'Arial, Helvetica, sans-serif',
            },
          });

          if (
            e.sender.args.clickedEntity.config.eventArgs.originalId === 'EU'
          ) {
            e.sender.chartType('maps/europe');
          } else if (
            e.sender.args.clickedEntity.config.eventArgs.originalId === 'NA'
          ) {
            e.sender.chartType('maps/northamerica');
          } else if (
            e.sender.args.clickedEntity.config.eventArgs.originalId === 'SA'
          ) {
            e.sender.chartType('maps/southamerica');
          } else if (
            e.sender.args.clickedEntity.config.eventArgs.originalId === 'AS'
          ) {
            e.sender.chartType('maps/asia');
          } else if (
            e.sender.args.clickedEntity.config.eventArgs.originalId === 'AU'
          ) {
            e.sender.chartType('maps/australia');
          } else if (
            e.sender.args.clickedEntity.config.eventArgs.originalId === 'AF'
          ) {
            e.sender.chartType('maps/africa');
          }
        }
      },
    },
  };

  useEffect(() => {
    async function loadData() {
      const objToMount = {
        continentsData: [],
        'South America': [],
        'North America': [],
        Asia: [],
        Africa: [],
        Australia: [],
        Europe: [],
      };
      const response = await api.get('/countries');
      const continentsData = [];
      const continents = Object.keys(worldJson);
      response.data.forEach((country) => {
        if (country.country === 'North America') {
          continentsData.push({
            id: 'NA',
            value: country.cases,
            link: 'newchart-json-NA',
          });
          return;
        }
        if (country.country === 'South America') {
          continentsData.push({
            id: 'SA',
            value: country.cases,
            link: 'newchart-json-SA',
          });
          return;
        }
        if (country.country === 'Europe') {
          continentsData.push({
            id: 'EU',
            value: country.cases,
            link: 'newchart-json-EU',
          });
          return;
        }
        if (country.country === 'Asia') {
          continentsData.push({
            id: 'AS',
            value: country.cases,
            link: 'newchart-json-AS',
          });
          return;
        }
        if (country.country === 'Africa') {
          continentsData.push({
            id: 'AF',
            value: country.cases,
            link: 'newchart-json-AF',
          });
          return;
        }
        if (country.country === 'Australia') {
          continentsData.push({
            id: 'AU',
            value: country.cases,
            link: 'newchart-json-AU',
          });
          return;
        }
        continents.forEach((continentName) => {
          worldJson[continentName].forEach((pais) => {
            if (pais.name === country.country) {
              objToMount[continentName] = [
                ...objToMount[continentName],
                {
                  id: pais.id,
                  value: country.cases,
                },
              ];
            }
          });
        });
      });
      // objToMount.continentsData = continentsData;
      objToMount.continentsData = [
        {
          id: 'NA',
          value: 0,
          tooltext: 'No data available(api is not working)',
          link: 'newchart-json-NA',
        },
        {
          id: 'SA',
          value: 0,
          tooltext: 'No data available(api is not working)',
          link: 'newchart-json-SA',
        },
        {
          id: 'AF',
          value: 0,
          tooltext: 'No data available(api is not working)',
          link: 'newchart-json-AF',
        },
        {
          id: 'AS',
          value: 0,
          tooltext: 'No data available(api is not working)',
          link: 'newchart-json-AS',
        },
        {
          id: 'AU',
          value: 0,
          tooltext: 'No data available(api is not working)',
          link: 'newchart-json-AU',
        },
        {
          id: 'EU',
          value: 0,
          tooltext: 'No data available(api is not working)',
          link: 'newchart-json-EU',
        },
      ];
      console.log(objToMount);
      setObjData(objToMount);
    }
    loadData();
  }, []);
  return <ReactFC {...chartConfigs} />;
}
