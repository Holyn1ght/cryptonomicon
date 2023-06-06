const API_KEY =
  "dab288ffcd897595de50f2e889a18e1471e79a03c3eaabaf95dd7c02f68d2a42";

export function loadTickers(tickers) {
  return fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(",")}&tsyms=USD&api_key=${API_KEY}}`
  )
    .then((r) => r.json())
    .then((rawData) =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )
    );
}
