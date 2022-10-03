function graphQLFetcher(graphQLParams) {
    // var appId = document.getElementById("appid").value;
    // var secret = document.getElementById("secret").value;
    var appId = 11342410230;
    var secret = "WM5L54SJZXMQKJAF7VE2HA4CZU5DY3EQ";
    var ts = Math.ceil(new Date().getTime() / 1000);

    var payload = JSON.stringify(graphQLParams);
    var factor = appId + ts + payload + secret;

    console.log(factor);

    var sign = CryptoJS.SHA256(factor).toString(CryptoJS.enc.Hex);

    var headers = {
        "Content-Type": "application/json",
        "Authorization": "SHA256 Credential=" + appId + ", Timestamp=" + ts + ", Signature=" + sign
    }

    return fetch("https://open-api.affiliate.shopee.co.id/explorer/graphql", {
        method: "post",
        headers: headers,
        body: payload,
        credentials: "include",
    }).then(function (response) {
        return response.text();
    }).then(function (responseBody) {
        try {
            return JSON.parse(responseBody);
        } catch (error) {
            return responseBody;
        }
    });
}

var defaultQuery = '{\n  brandOffer(name:\"demo\"){\n    nodes {\n      offerName\n    }\n  }\n}';

// var container = document.getElementById("graphiql");

// function init() {
//     ReactDOM.unmountComponentAtNode(container);

//     ReactDOM.render(
//         React.createElement(GraphiQL, {
//             fetcher: graphQLFetcher,
//             defaultQuery: defaultQuery,
//             docExplorerOpen: true,
//         }),
//         container
//     );
// }

// init();

console.log(graphQLFetcher(defaultQuery));