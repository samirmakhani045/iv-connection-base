import { useCallback, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

export const useUser = () => {
  const {
    store: { getState },
  } = useContext(ReactReduxContext);
  const state = getState();

  const getUser = useCallback(() => {
    return state?.userSlice;
  }, [state?.userSlice]);

  const isAdmin = (userId) => {
    const user = getUser();
    return user?.id === userId && user?.role === 'admin';
  };

  const hasPermissions = (roles) => {
    if (!roles) return true;
    const rolesArray = Array.isArray(roles) ? roles : [roles];

    return !rolesArray.length || rolesArray.includes(getUser()?.role);
  };

  return {
    getUser,
    isAdmin,
    hasPermissions,
  };
};
