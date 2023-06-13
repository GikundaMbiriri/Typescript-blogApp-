"use client";
import { store } from "./store";
import { Provider } from "react-redux";
import { extendedApiSlice } from "./app/post/postSlice";
import { userExtendedApiSlice } from "./app/users/usersSlice";
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(userExtendedApiSlice.endpoints.getUsers.initiate());

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
