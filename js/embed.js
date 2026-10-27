
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

// Chart 07: Australian Authors — Geographic Point-Location Map
vegaEmbed(
    '#author_birthplace_map',
    'charts/author_birthplace_pointmap.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading author birthplace map:', error);
});

// Chart 08: Australia's Most-Represented Authors — Treemap
vegaEmbed(
    '#author_treemap',
    'charts/author_treemap.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading author treemap:', error);
});


 // Chart 09: Favourite Australian Books by State
vegaEmbed(
    '#state_book_winners_map',
    'charts/state_favourite_book.vg.json',
    { actions: false }
).then(result => {

    const view = result.view;
    const buttons = document.querySelectorAll(
        '#book-legend button[data-book]'
    );

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            const selectedBook = button.dataset.book;

            // Update both the Australian map and ACT inset
            view.signal('selectedBook', selectedBook).runAsync();

            // Highlight the selected legend button
            buttons.forEach(b => {
                b.setAttribute(
                    'aria-pressed',
                    String(b === button)
                );
            });

        });
    });

}).catch(error => {
    console.error(
        'Error loading favourite books map:',
        error
    );
});


// Chart 10: Books Through the Years — Beeswarm
vegaEmbed(
    '#publication_year_beeswarm',
    'charts/publication_year_beeswarm_genres.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error('Error loading publication beeswarm:', error);
});

 // Chart 11: Books That Connect Generations
 // Bipartite Network Diagram

vegaEmbed(
    '#books_generation_network',
    'charts/books_by_generation_network.vg.json',
    {
        actions: false
    }
).catch(error => {
    console.error(
        'Error loading generation network:',
        error
    );
});
