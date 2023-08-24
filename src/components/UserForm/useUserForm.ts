import { User } from '@/types';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useEffect, useMemo, useState } from 'react';
import useListUsers from '../ListUsers/useListUsers';
import { useNavigate } from 'react-router-dom';

const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      first_name
      last_name
      email
      birth_date
      gender
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($first_name: String!, $last_name: String!, $email: String!, $birth_date: String!, $gender: String!) {
    addUser(first_name: $first_name, last_name: $last_name, email: $email, birth_date: $birth_date, gender: $gender) {
      id
      first_name
      last_name
      email
      birth_date
      gender
    }
  }
`;

const EDIT_USER = gql`
  mutation EditUser($id: String!, $first_name: String!, $last_name: String!, $email: String!, $birth_date: String!, $gender: String!) {
    editUser(id: $id, first_name: $first_name, last_name: $last_name, email: $email, birth_date: $birth_date, gender: $gender) {
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
 * Generates a custom hook for managing user form data and actions.
 *
 * @param {string} id - Optional. The ID of the user.
 * Return An object containing the loading state, error message, user data, submit status, and submit handler.
 */
export default function useUserForm(id?: string) {
    const { refetch } = useListUsers()
    const navigate = useNavigate()
    const { loading, error, data } = useQuery<{ user: User }>(GET_USER, {
        variables: { id: id || '' },
        skip: !id,
    });

    const [user, setUser] = useState<User>({
        first_name: '',
        last_name: '',
        email: '',
        birth_date: new Date().toISOString(),
        gender: '',
    })


    const [addUser] = useMutation<{ addUser: User }>(ADD_USER);
    const [editUser] = useMutation<{ editUser: User }>(EDIT_USER);
    const [isSubmiting, setIsSubmiting] = useState(false);

    useEffect(() => {
        if (!!data) {
            setUser(data.user);
        }
    }, [data]);

    const handleSubmit = async (values: User) => {
        setIsSubmiting(true);
        if (values.id) {
            const { data } = await editUser({
                variables: { id, ...values },
            });
        } else {
            const { data } = await addUser({
                variables: { ...values },
            });
        }
        await refetch();
        navigate('/');
        setIsSubmiting(false);
    };

    const errorr = useMemo(() => {
        if (!id)
            return null
        return error ? error.message : (!data?.user ? "User not found" : null)
    }, [error, id, data])


    return {
        loading,
        error: errorr,
        user,
        isSubmiting,
        handleSubmit
    }
}
