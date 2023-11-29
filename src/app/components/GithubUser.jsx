export async function GithubUser({ username }) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  return (
    <>
      <p>{JSON.stringify(user)}</p>
    </>
  )
}