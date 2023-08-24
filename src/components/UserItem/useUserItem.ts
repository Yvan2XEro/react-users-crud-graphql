import { User } from '@/types'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import useListUsers from '../ListUsers/useListUsers'


const DELETE_USER = gql`
    mutation DeleteUser($id: String!) {
        deleteUser(id: $id){
            id
        }
    }`
/**
 * A hook that returns an object with a `deletUser` function.
 *
 * @param {User} user - The user object.
 * Returns An object with a `deletUser` function.
 */
export default function useUserItem(user: User) {
    const [deleteUser] = useMutation<{ deleteUser: User }>(DELETE_USER)
    const { refetch } = useListUsers()

    async function deletUser() {
        if (confirm("Are you sure you want to delete this user?")) {
            await deleteUser({ variables: { id: user.id } })
            await refetch()
        }
    }

    return {
        deletUser
    }
}
