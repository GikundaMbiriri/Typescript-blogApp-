import { createEntityAdapter, createSelector,EntityState } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
import { User } from "@/types";
type UsersResponse = User[]
const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => b.name.localeCompare(a.name),
});
const initialState = usersAdapter.getInitialState();

export const userExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<EntityState<User>, void>({
      query: () => "/users",
      transformResponse: (responseData:UsersResponse):EntityState<User> => {
      

        return usersAdapter.setAll(initialState, responseData);
      },
      providesTags: (result:any) => {
        return [
          { type: "User", id: "LIST" },
          ...result.ids.map((id:number|string) => ({ type: "User", id })),
        ];
      },
    }),
  }),
})

export const selectUsersResult =
  userExtendedApiSlice.endpoints.getUsers.select()
const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors(
  (state:any) => selectUsersData(state) ?? initialState
);

export const { useGetUsersQuery } = userExtendedApiSlice;
