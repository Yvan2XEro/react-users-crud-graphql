import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { RootState, AppDispatch } from '../../store';
import { User } from '../../types';
import { useEffect } from 'react';
import { setUsers } from '@/store/slices/usersSlice';


const GET_USERS = gql`
  query GetUsers {
    users {
      id
      first_name
      last_name
      email
      birth_date
      gender
    }
  }
`;


/**
 * Retrieves a list of users from the server and updates the Redux store with the fetched data.
 *
 * @return {loading: boolean, error: any, users: User[], refetch: Function} An object containing information about the loading state, any errors that occurred, and the list of users.
 */
export default function useListUsers(): { loading: boolean, error: any, users: User[], refetch: Function } {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(({ users }: RootState) => users.users);

  const { loading, error, data, refetch } = useQuery<{ users: User[] }>(GET_USERS);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data.users));
    }
  }, [data, dispatch]);

  return {
    loading, error, users, refetch
  }
}
