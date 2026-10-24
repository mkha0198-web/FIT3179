
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


// Chart 5: Reading Participation by State — Choropleth Map
vegaEmbed(
    '#reading_state_map',
    'charts/reading_state_choropleth.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading reading map:', error);
});


// Chart 6: Public Library Service Points — Proportional Symbol Map
vegaEmbed(
    '#library_outlets_map',
    'charts/library_outlets_proportional_symbols.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading library outlets map:', error);
});
