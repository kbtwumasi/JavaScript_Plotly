// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = data.metadata.filter(chartObj => chartObj.id == sample);
    // Create a variable that holds the first sample in the array.
  

    // 2. Create a variable that holds the first sample in the metadata array.
    var guageResult= metadataArray[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3. Create a variable that holds the washing frequency.
    var washingFreq = Math.round(guageResult.wfreq*100)/100;
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x: [0, 1], y: [0, 1] },
      type: 'indicator',
      mode: 'gauge+number',
      value: washingFreq,
      title: {
        text: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week' 
        },
      gauge: {
        axis: {range: [null, 10]},
        bar: {color: 'black'},
        steps: [
          {range: [0, 2], color: "red"},
          {range: [2, 4], color: "orange"},
          {range: [4, 6], color: "yellow"},
          {range: [6, 8], color: "lime"},
          {range: [8, 10], color: "green"}
        ]
      },
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 600,
      height: 600
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
