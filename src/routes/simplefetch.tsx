import { SimpleDataFetch } from "~/components/DataFetching/SimpleDataFetch";

/**This page needs a json-server running on the "db.json" file.*/

export default function SimpleFetch() {
  return (
    <>
      <main>
        <h1>Simple Data Fetch</h1>
        <h3>This page needs a json-server running on the "db.json" file.</h3>
        <SimpleDataFetch />
      </main>
    </>
  );
}
