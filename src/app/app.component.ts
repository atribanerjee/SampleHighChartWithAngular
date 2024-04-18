import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SampleHighChartWithAngular';
  lineChart = new Chart({
    chart: {
      type: 'line'
  },
  title: {
      text: 'Monthly Average Temperature ( Line Chart)'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
          'target="_blank">Wikipedia.com</a>'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
      title: {
          text: 'Temperature (°C)'
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      }
  },
  series: [{
      name: 'Reggane',
      data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
          22.0, 17.8]
  }, {
      name: 'Tallinn',
      data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
          2.0, -0.9]
  } as any
]
  });
  
  barChart = new Chart({
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Fruit Consumption (Bar Chart)'
  },
  xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
      title: {
          text: 'Fruit eaten'
      }
  },
  series: [{
      name: 'Jane',
      data: [1, 0, 4]
  }, {
      name: 'John',
      data: [5, 7, 3]
  } as any
] 
  });

  pieChart = new Chart({
    chart: {
      type: 'pie'
  },
  title: {
      text: 'Egg Yolk Composition (Pie Chart)'
  },
  tooltip: {
      valueSuffix: '%'
  },
  subtitle: {
      text:
      'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
  },
  plotOptions: {
      series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
              enabled: true,
          }, {
              enabled: true,              
              format: '{point.percentage:.1f}%',
              style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7
              },
              filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10
              }
          }]
      }
  },
  series: [
      {
          name: 'Percentage',
          colorByPoint: true,
          data: [
              {
                  name: 'Water',
                  y: 55.02
              },
              {
                  name: 'Fat',
                  sliced: true,
                  selected: true,
                  y: 26.71
              },
              {
                  name: 'Carbohydrates',
                  y: 1.09
              },
              {
                  name: 'Protein',
                  y: 15.5
              },
              {
                  name: 'Ash',
                  y: 1.68
              }
          ]
      } as any
  ]

  });

}
