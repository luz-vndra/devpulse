import { useParams } from "react-router-dom"
import { useGetUserQuery } from "../api/githubApi"

export default function Profile() {

  const { username } = useParams()

  const { data, isLoading, error } = useGetUserQuery(username!)

  if (isLoading) return <p>Loading profile...</p>
  if (error) return <p>Error loading profile</p>

  return (
    <div className="bg-white p-6 rounded shadow">

      <img
        src={data?.avatar_url}
        className="w-24 rounded-full mb-4"
      />

      <h2 className="text-2xl font-bold">{data?.login}</h2>

      <p className="text-gray-600">{data?.bio}</p>

      <div className="flex gap-6 mt-4">

        <div>
          <p className="font-bold">{data?.followers}</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>

        <div>
          <p className="font-bold">{data?.following}</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>

        <div>
          <p className="font-bold">{data?.public_repos}</p>
          <p className="text-sm text-gray-500">Repos</p>
        </div>

      </div>

    </div>
  )
}