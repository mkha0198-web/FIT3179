
vegaEmbed(
    '#waffle_chart',
    'charts/waffle_chart.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading waffle chart:', error);
});


 // Chart 2: Reading Genres by Age Group - Heatmap
vegaEmbed(
    '#genre_heatmap',
    'charts/genre_heatmap.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading genre heatmap:', error);
});
