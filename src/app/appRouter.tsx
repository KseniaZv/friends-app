import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Loadable } from '../shared/ui/loadable';
import { MainLayout } from '../pages/layouts';

const AboutFriend = Loadable(lazy(() => import('../pages/about-friend/AboutFriend')));
const AddFriend = Loadable(lazy(() => import('../pages/add-friend/AddFriend')));
const EditFriend = Loadable(lazy(() => import('../pages/edit-friend/EditFriend')));
const FriendList = Loadable(lazy(() => import('../pages/friend-list/FriendList')));
const NotFound = Loadable(lazy(() => import('../pages/not-found/NotFound')));

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        // TODO CHECK
        {
          path: '',
          element: <FriendList />,
        },
        {
          path: 'friends',
          element: <FriendList />,
        },
        { path: 'friends/:id', element: <AboutFriend /> },
        { path: 'friends/:id/edit', element: <EditFriend /> },
        { path: 'friends/new', element: <AddFriend /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);
