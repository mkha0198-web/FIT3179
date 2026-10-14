
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


 // Chart 3: Physical vs Digital Library Collections
vegaEmbed(
    '#collections_butterfly',
    'charts/collections_butterfly.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading butterfly chart:', error);
});


 // Chart 4: Library Membership vs Collection Usage
vegaEmbed(
    '#membership_scatter',
    'charts/membership_scatter.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading connected scatterplot:', error);
});
