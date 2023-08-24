import { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import { IntlProvider } from "react-intl";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <IntlProvider locale="fr">
          <>{children}</>
        </IntlProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}
