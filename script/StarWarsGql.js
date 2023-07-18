import http from "k6/http";
import { check } from 'k6';
import { queryStarWarsList } from "../resources/graphql";
import { urlGraphql } from "../support/UrlApi";

let token;

export default function(){
//setup token
if (__ITER==0) {
    token = loginUsingCognito();
  }

  let baseUrl = urlGraphql()
  
  let payload = {"query": queryStarWarsList(), "variables":variablesPaginatedFinancingProject()}

  let headers = {
    'Authorization': `Bearer ${token}`,
    "Content-Type": "application/json",
    "x-kargo-company-ksuid": "23ro5TG5Cbehc7vXUFOnz8sQQ8w",
    "x-kargo-role": "transporter"
  }

  let res = http.post(baseUrl,JSON.stringify(payload), {
    headers: headers,
    tags: {
      name: 'paginated financing projects'
    }
  });

  //assertion, only need to check 200, data is exist, and no errors
  check(res, {
    'is status 200': (r) => r.status === 200,
    'verify data is exist': (r) =>
      r.body.includes('data'),
    'verify error is not exist': (r) =>
      !r.body.includes('errors'),
  });
}