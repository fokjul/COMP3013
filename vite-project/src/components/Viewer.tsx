type Props = { cityName: string | null };

function Viewer({ cityName }: Props) {
  if (cityName === null) return <p>No city selected</p>;
  return <p>The city selected is {cityName}</p>;
}

export default Viewer;
