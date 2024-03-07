const connectToDatabase = require("./connectToDatabase.js");

async function getMovies() {
    try {
        const db = await connectToDatabase(); 
        const collect =  await db.collection("MoviesData");

        // Aggregation 1: Genre counts
        const genreCounts = await collect.aggregate([
            { $unwind: '$genres' },
            { $group: { _id: '$genres', count: { $sum: 1 } } }
        ], { allowDiskUse: true }).toArray();
        console.log('Genre counts:', genreCounts);

        // Aggregation 2: Directors sorted by movie count
        const directorMovies = await collect.aggregate([
            { $group: { _id: '$directors', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ], { allowDiskUse: true }).toArray();
        console.log('Directors sorted by movie count:', directorMovies);

        // Aggregation 3: Average runtime
        const averageRuntime = await collect.aggregate([
            { $group: { _id: null, avgRuntime: { $avg: '$runtime' } } }
        ], { allowDiskUse: true }).toArray();
        console.log('Average Runtime:', averageRuntime);

        // Aggregation 4: Top countries
        const topCountries = await collect.aggregate([
            { $unwind: '$countries' },
            { $group: { _id: '$countries', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 }
        ], { allowDiskUse: true }).toArray();
        console.log('Top Countries:', topCountries);

        // Aggregation 5: Yearly movie counts
        const yearlyMovieCounts = await collect.aggregate([
            { $group: { _id: { $year: '$released' }, count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ], { allowDiskUse: true }).toArray();
        console.log('Yearly Movie Counts:', yearlyMovieCounts);

        // Aggregation 6: Total awards
        const totalAwards = await collect.aggregate([
            { $group: { _id: null, totalAwards: { $sum: '$awards.wins' } } }
        ], { allowDiskUse: true }).toArray();
        console.log('Total Awards:', totalAwards);

        // Aggregation 7: Average IMDb rating
        const avgImdbRating = await collect.aggregate([
            { $group: { _id: null, avgRating: { $avg: '$imdb.rating' } } }
        ], { allowDiskUse: true }).toArray();
        console.log('Average IMDb Rating:', avgImdbRating);

        // Aggregation 8: Most common genres
        const commonGenres = await collect.aggregate([
            { $unwind: '$genres' },
            { $group: { _id: '$genres', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 5 }
        ], { allowDiskUse: true }).toArray();
        console.log('Most Common Genres:', commonGenres);

        // Aggregation 9: Number of movies per director
        const moviesPerDirector = await collect.aggregate([
            { $unwind: '$directors' },
            { $group: { _id: '$directors', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ], { allowDiskUse: true }).toArray();
        console.log('Movies per Director:', moviesPerDirector);

        // Aggregation 10: Number of movies per year for the last decade
        const moviesPerYearLastDecade = await collect.aggregate([
            { $match: { 'year': { $gte: 2010, $lte: 2020 } } },
            { $group: { _id: { $year: '$released' }, count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ], { allowDiskUse: true }).toArray();
        console.log('Movies per Year for Last Decade:', moviesPerYearLastDecade);

        // Aggregation 11: Average number of comments per movie
        const avgCommentsPerMovie = await collect.aggregate([
            { $group: { _id: null, avgComments: { $avg: '$num_mflix_comments' } } }
        ], { allowDiskUse: true }).toArray();
        console.log('Average Comments per Movie:', avgCommentsPerMovie);

        // Aggregation 12: Number of movies released each month
        const moviesPerMonth = await collect.aggregate([
            { $group: { _id: { $month: '$released' }, count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ], { allowDiskUse: true }).toArray();
        console.log('Movies per Month:', moviesPerMonth);

        // Aggregation 13: Most common actors
        const commonActors = await collect.aggregate([
            { $unwind: '$cast' },
            { $group: { _id: '$cast', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 5 }
        ], { allowDiskUse: true }).toArray();
        console.log('Most Common Actors:', commonActors);

        // Aggregation 14: Movies with the highest ratings
        const highestRatedMovies = await collect.aggregate([
            { $sort: { 'imdb.rating': -1 } },
            { $limit: 5 }
        ], { allowDiskUse: true }).toArray();
        console.log('Highest Rated Movies:', highestRatedMovies);

         // Aggregation 15: Movies released in the past 10 years
         const moviesLast10Years = await collect.aggregate([
            { $match: { 'year': { $gte: new Date().getFullYear() - 10 } } },
            { $group: { _id: '$year', count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ], { allowDiskUse: true }).toArray();
        console.log('Movies Released in the Last 10 Years:', moviesLast10Years);

    } catch (error) {
        console.error(error);
    }
}

getMovies();
