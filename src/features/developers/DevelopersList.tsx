import { useGetUsersQuery } from "../../api/githubApi"

export default function DevelopersList() {
  const { data, isLoading, error } = useGetUsersQuery()

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error loading users</p>

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow p-4 rounded"
        >
          <img src={user.avatar_url} className="w-16 rounded-full" />
          <p>{user.login}</p>
        </div>
      ))}
    </div>
  )
}