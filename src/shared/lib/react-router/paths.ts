export const PATH_PAGE = {
  root: '/',
  friends: '/friends',
  aboutFriend: {
    id: (id: string) => `/friends/${id}`,
  },
  editFriend: {
    id: (id: string) => `/friends/${id}/edit`,
  },
  addFriend: '/friends/new',
  page404: '/404',
};
