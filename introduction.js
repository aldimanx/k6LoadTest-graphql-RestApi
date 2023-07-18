export function queryStarWarsList(){
  let queryGql = `query Query {
      allFilms {
        films {
          title
          director
          releaseDate
          speciesConnection {
            species {
              name
              classification
              homeworld {
                name
              }
            }
          }
        }
      }
    }`
    return queryGql
}