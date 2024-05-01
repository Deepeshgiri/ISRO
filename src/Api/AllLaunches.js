const AllLaunches = async () => {
  const res = await fetch("https://services.isrostats.in/api/spacecraft");
  if (!res.ok) {
    throw new Error("error getting response from server ");
  }
  const data = await res.json();
  console.log(data)

  return data;
};
export default AllLaunches