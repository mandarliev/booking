import { notFound } from "next/navigation";

type Props = {
  searchParams: SearchParams;
};

type SearchParams = {
  url: URL;
  ss: string;
  checkin: string;
  checkout: string;
  group_adults: string;
  group_children: string;
  no_rooms: string;
};

function SearchPage({ searchParams }: Props) {
if (!searchParams.url) {
    return notFound(); 
}

const results = await fetchResults(searchParams);

if(!results) {
    return (
        <div>No Results</div>
    )
}
  return <div>Search Page</div>;
}

export default SearchPage;
