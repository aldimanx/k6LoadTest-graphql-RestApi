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

export function variablesPaginatedFinancingProject(){
  let variablesGql = {
      
          "first": 10,
          "offset": 0,
          "page": 0,
          "companyKsuid": "23ro5TG5Cbehc7vXUFOnz8sQQ8w"
        }
  return JSON.stringify(variablesGql)
  }
