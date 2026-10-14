
vegaEmbed(
    '#waffle_chart',
    'charts/waffle_chart.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading waffle chart:', error);
});
