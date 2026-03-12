import { Link } from "react-router-dom"
import { useGetUsersQuery } from "../api/githubApi"

export default function DevelopersList() {

  const { data, isLoading, error } = useGetUsersQuery()

  if (isLoading) return <p>Loading developers...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <div className="grid grid-cols-4 gap-6">

      {data?.map((user) => (
        <Link
          key={user.id}
          to={`/profile/${user.login}`}
          className="bg-white p-4 rounded shadow hover:shadow-lg transition"
        >
          <img
            src={user.avatar_url}
            className="w-16 h-16 rounded-full mb-2"
          />

          <p className="font-semibold">{user.login}</p>
        </Link>
      ))}

    </div>
  )
}