import React ,{useEffect, useState} from "react"
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import Europe from 'fusioncharts/maps/fusioncharts.europe';
import NorthAmerica from 'fusioncharts/maps/fusioncharts.northamerica';
import SouthAmerica from 'fusioncharts/maps/fusioncharts.southamerica';
import Asia from 'fusioncharts/maps/fusioncharts.asia';
import Australia from 'fusioncharts/maps/fusioncharts.australia';
import Africa from 'fusioncharts/maps/fusioncharts.africa';
import api from "./services/api"
import worldJson from "./const"





// import Europe from 'fusioncharts/maps/fusioncharts.europe';

import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Maps, World,Europe,NorthAmerica,SouthAmerica,Asia,Australia,Africa, FusionTheme);
export default function App() {
  const [objData, setObjData] = useState({})
  const chartConfigs = {
    type: 'world',
    width: "100%",
    height: 700,
    dataFormat: 'json',
  dataSource : {
    chart: {
      caption: "Worldwide Covid - Confirmed cases 2020",
      subcaption: "Measured in confirmed cases",
      captionalignment: "left",
      theme: "fusion",
      formatnumberscale: "0",
      numbersuffix: " confirmed cases",
      entityfillhovercolor: "#FFF9C4",
      entitytooltext:
        "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lname</div><div style='font-size:12px; color:black'>$value confirmed cases</div>"
    },
    colorrange: {
      startlabel: "Low",
      endlabel: "High",
      code: "#FFE0B2",
      minvalue: "5000",
      gradient: "1",
      color: [
        {
          maxvalue: "500000",
          displayvalue: "Average",
          code: "#FFD74D"
        },
        {
          maxvalue: "1500000",
          code: "#E65100"
        }
      ]
    },
    data: objData.continentsData,
    linkeddata: [
      {
        id: "NA",
        linkedchart: {
  
          chart: {
            caption: "North America Worldwide Covid - Confirmed cases 2020",
            subcaption: "Measured in confirmed cases",
            numbersuffix: " confirmed cases",
            captionalignment: "left",
            theme: "fusion",
            formatnumberscale: "0",
            entityfillhovercolor: "#FFF9C4",
            entitytooltext:
              "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px;color:black'>$value confirmed cases</div>"
          },
          colorrange: {
            minvalue: "1000",
            startlabel: "Low",
            endlabel: "High",
            code: "#FFE0B2",
            gradient: "1",
            color: [
              {
                maxvalue: 800000,
                displayvalue: "Average",
                code: "#FFD74D"
              },
              {
                maxvalue: 1500000,
                code: "#E65100"
              }
            ]
          },
          data: objData["North America"],
        }
      },
      {
        id: "SA",
        linkedchart: {
          chart: {
            caption: "South America Covid - Confirmed cases 2020",
            subcaption: "Measured in confirmed cases",
            captionalignment: "left",
            theme: "fusion",
            formatnumberscale: "0",
            showlabels: "0",
            numbersuffix: " confirmed cases",
            entityfillhovercolor: "#FFF9C4",
            entitytooltext:
              "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value confirmed cases</div>"
          },
          colorrange: {
            minvalue: "100",
            startlabel: "Low",
            endlabel: "High",
            code: "#FFE0B2",
            gradient: "1",
            color: [
              {
                maxvalue:50000,
                displayvalue: "Average",
                code: "#FFD74D"
              },
              {
                maxvalue: 100000,
                code: "#E65100"
              }
            ]
          },
          data: objData["South America"],
        }
      },
      {
        id: "AS",
        linkedchart: {
          chart: {
            caption: "Asia Covid - Confirmed cases 2020",
            subcaption: "Measured in confirmed cases",
            captionalignment: "left",
            theme: "fusion",
            formatnumberscale: "0",
            showlabels: "0",
            numbersuffix: " confirmed cases",
            entityfillhovercolor: "#FFF9C4",
            entitytooltext:
              "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value confirmed cases</div>"
          },
          colorrange: {
            minvalue: "1000",
            startlabel: "Low",
            endlabel: "High",
            code: "#FFE0B2",
            gradient: "1",
            color: [
              {
                maxvalue: "50000",
                displayvalue: "Average",
                code: "#FFD74D"
              },
              {
                maxvalue: "110000",
                code: "#E65100"
              }
            ]
          },
          data: objData["Asia"],
        }
      },
      {
        id: "EU",
        linkedchart: {
          chart: {
   
            caption: "Europe Covid - Confirmed cases 2020",
            subcaption: "Measured in confirmed cases",
            captionalignment: "left",
            theme: "fusion",
            formatnumberscale: "0",
            showlabels: "0",
            numbersuffix: " confirmed cases",
            entityfillhovercolor: "#FFF9C4",
            entitytooltext:
              "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value confirmed cases</div>"
          },
          colorrange: {
            minvalue: "500",
            startlabel: "Low",
            endlabel: "High",
            code: "#FFE0B2",
            gradient: "1",
            color: [
              {
                maxvalue: "100000",
                displayvalue: "Average",
                code: "#FFD74D"
              },
              {
                maxvalue: "300000",
                code: "#E65100"
              }
            ]
          },
          data: objData["Europe"],
        }
      },
      {
        id: "AU",
        linkedchart: {
          chart: {
            caption: "Australia Covid - Confirmed cases 2020",
            subcaption: "Measured in confirmed cases",
            captionalignment: "left",
            theme: "fusion",
            formatnumberscale: "0",
            showlabels: "0",
            numbersuffix: " confirmed cases",
            entityfillhovercolor: "#FFF9C4",
            entitytooltext:
              "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black'>$value confirmed cases</div>"
          },
          colorrange: {
            minvalue: "100",
            startlabel: "Low",
            endlabel: "High",
            code: "#FFE0B2",
            gradient: "1",
            color: [
              {
                maxvalue: "40000",
                displayvalue: "Average",
                code: "#FFD74D"
              },
              {
                maxvalue: "80000",
                code: "#E65100"
              }
            ]
          },
          data: [
            {
              id: "SW",
              value: 0,
              tooltext: "No Data available"},
            {
              id: "NT",
               value: 0,
              tooltext: "No Data available"
            },
            {
              id: "QU",
             value: 0,
              tooltext: "No Data available"
            },
            {
              id: "SA",
              value: 0,
              tooltext: "No Data available"
            },
            {
              id: "TA",
             value: 0,
              tooltext: "No Data available"
            },
            {
              id: "VI",
           value: 0,
              tooltext: "No Data available"
            },
            {
              id: "WA",
                            value: 0,
              tooltext: "No Data available"
            }
          ]
        }
      },
      {
        id: "AF",
        linkedchart: {
          chart: {
            overlayButton: {
              message: "YEEEH"
            },
            caption: "Africa Covid - Confirmed cases 2020",
            subcaption: "Measured in confirmed cases",
            captionalignment: "left",
            theme: "fusion",
            formatnumberscale: "0",
            showlabels: "0",
            numbersuffix: " confirmed cases",
            entityfillhovercolor: "#FFF9C4",
            entitytooltext:
              "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black'>$value confirmed cases</div>"
          },
          colorrange: {
            minvalue: "30",
            startlabel: "Low",
            endlabel: "High",
            code: "#FFE0B2",
            gradient: "1",
            color: [
              {
                maxvalue: "5000",
                displayvalue: "Average",
                code: "#FFD74D"
              },
              {
                maxvalue: "10000",
                code: "#E65100"
              }
            ]
          },
          data: objData["Africa"],
        }
      }
    ]
  },
  "events": {
    "linkedItemOpened":function(e,d) {
      const chart = FusionCharts(Object.keys(e.sender.link.items)[0])
              // chart.setChartAttribute({
              //   caption:"BLABLBALBAL",
              // })
              // console.log(chart.getChartAttribute())
              chart.resizeTo("100%",800)
    },
    "beforedataupdate": function(e, d) {
      // console.log(e.sender.id,'antes')
      if(e.sender.args.clickedEntity) {
        FusionCharts("chartobject-1").configureLink({
          overlayButton: {
            message:"Back",
            bgColor:"#FFE0B2",
            padding:10,
            fontColor:"#E65100",
            fontFamily: "Arial, Helvetica, sans-serif"
          }
        })
    
        if(e.sender.args.clickedEntity.config.eventArgs.originalId === "EU") {
          e.sender.chartType("maps/europe")

        } else if (e.sender.args.clickedEntity.config.eventArgs.originalId === "NA") {
          e.sender.chartType("maps/northamerica")
  
        }
        else if (e.sender.args.clickedEntity.config.eventArgs.originalId === "SA") {
          e.sender.chartType("maps/southamerica")
  
        }
        else if (e.sender.args.clickedEntity.config.eventArgs.originalId === "AS") {
          e.sender.chartType("maps/asia")
  
        }
        else if (e.sender.args.clickedEntity.config.eventArgs.originalId === "AU") {
          e.sender.chartType("maps/australia")
  
        }
        else if (e.sender.args.clickedEntity.config.eventArgs.originalId === "AF") {
          e.sender.chartType("maps/africa")
  
        }
      }
  
      }
    }
  }

  useEffect(() => {
     async function loadData() {
      const objToMount = {
        continentsData: [],
        "South America":[],
        "North America": [],
        "Asia": [],
        "Africa":[],
        "Australia":[],
        "Europe": []
      }
       const response =await api.get("/countries")
       const continentsData = []
       const continents = Object.keys(worldJson)
      response.data.forEach(country => {
        
          if(country.country === "North America") {
            continentsData.push({
              id: "NA",
              value: country.cases,
              link: "newchart-json-NA"
            })
            return  
          }
          else if(country.country === "South America") {
            continentsData.push({
              id: "SA",
              value: country.cases,
              link: "newchart-json-SA"
            })
            return  
        }
        else if(country.country === "Europe") {
          console.log("EUROPAAA")
          continentsData.push({
            id: "EU",
            value: country.cases,
            link: "newchart-json-EU"
          })
          return  
      }
      else if(country.country === "Asia") {
        continentsData.push({
          id: "AS",
          value: country.cases,
          link: "newchart-json-AS"
        })
        return  
      }
      else if(country.country === "Africa") {
        continentsData.push({
          id: "AF",
          value: country.cases,
          link: "newchart-json-AF"
        })
        return  
      }
    else if(country.country === "Australia") {
      continentsData.push({
        id: "AU",
        value: country.cases,
        link: "newchart-json-AU"
      })
      return  
    }
    continents.forEach(continentName => {
      worldJson[continentName].forEach(pais => {
        if(pais.name === country.country) {
          objToMount[continentName] =[ ...objToMount[continentName],{id:pais.id, value: country.cases}]

        }
      })

    })



  })
  objToMount.continentsData = continentsData
  console.log(objToMount)
  setObjData(objToMount)
    }
      loadData()
  },[])
  return <ReactFC fcEvent-beforeDataUpdate={(chart) => alterChart(chart)} {...chartConfigs} />;
}
